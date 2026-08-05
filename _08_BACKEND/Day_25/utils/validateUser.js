const validator = require("validator");

function validateUser(req){
    const mandetoryFields = ["firstname", "age", "emailid", "password"];
    const IsAllowed = mandetoryFields.every((k) =>
      Object.keys(req.body).includes(k),
    );

    if (!IsAllowed) {
      throw new Error("Invalid fields in request body");
    }

    if(!validator.isEmail(req.body.emailid)){
        throw new Error("Invalid email id");
    }
    if(!validator.isStrongPassword(req.body.password)){
        throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol");
    }
    if(req.body.firstname.length < 3 || req.body.firstname.length > 30){
        throw new Error("Firstname must be between 3 and 30 characters long");
    }
}

module.exports = validateUser;

