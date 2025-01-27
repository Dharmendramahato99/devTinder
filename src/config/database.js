const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mahatodharmendra726:gO7aupYvuoEM4xF2@namastemongo.2xuhv.mongodb.net/devTinder');
};

module.exports = connectDB;



