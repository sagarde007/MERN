const redisClient = require("../config/redis");

const rateLimiter = async (req, res, next)=>{
    try{
        const ip = req.ip;
        // console.log(ip);

        const count = await redisClient.incr(ip);
        // console.log(count);

        if (count == 1) {
          await redisClient.expire(3600);
        }

        if(count > 60){
            throw new Error("Too many requests. Please try again later.");
        }

        next();
        
    }
    catch(err){
        console.log("Error: "+ err);
    }
}
module.exports = rateLimiter;