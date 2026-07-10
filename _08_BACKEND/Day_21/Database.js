const mongoose = require("mongoose");


async function main(){
  await mongoose.connect(
    "mongodb+srv://createxpro6:Sagar123%40@codingbysagar.eigb6yq.mongodb.net/Instagram"
  );

}

module.exports = main;