const bcrypt = require("bcrypt");

const password = "Sagar123@";

async function Hashing() {
  // hashcode + salt

//   const salt = await bcrypt.genSalt(10);
//   const hashpass = await bcrypt.hash(password, salt);

    const hashpass = await bcrypt.hash(password, 10);

  const ans = await bcrypt.compare(password, hashpass);
  console.log(ans);

//   console.log(salt);
//   console.log(hashpass); 
} 
Hashing();
