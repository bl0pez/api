const User = require("../models/User")

const existEmail = async(email) => {
    const checkEmail = await User.findOne({email});

    if(checkEmail){
        throw new Error("Email already exists");
    }

}

module.exports = {
    existEmail
}