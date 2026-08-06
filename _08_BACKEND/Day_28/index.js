const express = require('express');
const app = express();
const main = require('./aichat');

app.use(express.json());

// we can store the chatting history in a variable or a database. For now, we will use a variable to store the chatting history.

const chattingHistory = {};

app.post("/chat",async(req,res)=>{
    const {id,msg} = req.body;

    if(!chattingHistory[id]){
        chattingHistory[id] = [];
    }

    const history = chattingHistory[id];

    const promptmsg = [...history,{
        role:"user",
        parts: [{ text: msg }]
    }];

    const answer = await main(promptmsg);

    history.push({
        role:'user',
        parts:[{ text: msg }]
    });

    history.push({
      role: "model",
      parts: [{ text: answer }],
    });

    res.send( answer );
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
}) 