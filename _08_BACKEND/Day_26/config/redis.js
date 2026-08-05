const redis = require('redis');

const redisClient = redis.createClient({
  username: "default",
  password: "J6GwuIeakWF0KUpJBUir0wbnTd3Jaliy",
  socket: {
    host: "tamarind-bluish-ultravivid-25929.db.redis.io",
    port: 14484,
  },
});


module.exports = redisClient;