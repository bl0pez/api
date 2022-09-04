const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        
        mongoose.connect(process.env.MONGO_CONNECTION);
        console.log("Connected to MongoDB");

    } catch (error) {
        console.log(error);
        throw new Error("Error connecting to MongoDB");
    }
}


module.exports = dbConnection;