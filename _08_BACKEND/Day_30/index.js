const { GoogleGenAI } = require("@google/genai");
const readlineSync = require("readline-sync");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const conversationHistory = [];

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: conversationHistory,
  });
  return response.text;
}

// http://api.weatherapi.com/v1/future.json?key=75021a0ccf164765bf234936260608&q=London&dt=2026-09-05


// weather leke aiyaga
async function getWeather(location) {
  const weatherinfo = [];
  for (const { city, date } of location) {
    if (date.toLowerCase() == "today") {
      // Process today's weather
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`,
      );

      const data = await response.json();
      weatherinfo.push(data);
    } else {
      const response = await fetch(
        `https://api.weatherapi.com/v1/future.json?key=${process.env.WEATHER_API_KEY}&q=${city}&dt=${date}`,
      );

      const data = await response.json();
      weatherinfo.push(data);
    }
  }
  return weatherinfo;
}

async function chatting(){


const question = readlineSync.question("How i can help you? ");

const prompt = `You are a weather assistant. You will be given a question about the weather, and you will provide a response that includes the city and date for which the user wants to know the weather. If the user does not specify a date, assume they want to know the weather for today. If the user does not specify a city, assume they want to know the weather for New York City.if the user asks about the weather for a future date, you should provide the date in the format YYYY-MM-DD.
if you need weather information, use the following JSON format to respond to the user:
 Your response should be in JSON format with the following structure: 
 "weather_details_needed": boolean,
 "location": [{ "city": "city_name", "date": "date" }]
 }
 once you have the weather information, respond to the user with a message that includes the city, date, and weather information. If you do not need weather information, respond to the user with a message that does not include any weather information.

 User question: ${question}
 strictly respond in JSON format.

 if weather_details_needed is false, you give a weather_report.
 `;

 conversationHistory.push({
  role: "user",
  parts: [{
    text: prompt,
  }]
 });

 while(true){

 let response = await main();
 response = response.replace(/^```json\s*|```$/g, '').trim();
 const data = JSON.parse(response);
//  console.log(data);

if(data.weather_details_needed === false){
  console.log(data.weather_report);
  break;
}

 const weatherInformation = await getWeather(data.location);
 const weatherinfo = JSON.stringify(weatherInformation);

 conversationHistory.push({
   role: "user",
   parts: [
     {text:weatherinfo}
   ],
 });

 }
 
}
chatting();
