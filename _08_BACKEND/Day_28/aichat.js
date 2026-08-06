const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
  apiKey: "AQ.Ab8RN6Jxxr646u71X6CmN3rXtMPiZuJdiPE1uzc5ns2kYJs74g",
});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: msg,
  });
  return response.text;
}

module.exports = main;

