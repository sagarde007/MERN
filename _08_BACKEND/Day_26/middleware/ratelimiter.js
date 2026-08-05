const redisClient = require("../config/redis");

// total time = 60 min
const windowsize = 3600;
const maxrequest = 60;


const rateLimiter = async (req, res, next)=>{
    try{
        const key = `IP${req.ip}`;
        const current_time = Date.now()/1000; // convert to seconds
        const window_time = current_time - windowsize;

        // remove all the requests which are older than 60 min
        await redisClient.zRemRangeByScore(key, 0, window_time);

        // total number of requests in the last 60 min
        const count = await redisClient.zCard(key);

        if(count >= maxrequest){
            throw new Error("Too many requests. Please try again later.");
        }

        // record the current request with a unique value to avoid duplicates
        await redisClient.zAdd(key, [{score:current_time, value:`${current_time}:${Math.random()}`}] );

        // set the expiration time for the key to 60 min
        await redisClient.expire(key, windowsize);

        next();
        
        
    }
    catch(err){
        console.log("Error: "+ err);
    }
}
module.exports = rateLimiter;               
