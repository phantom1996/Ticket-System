//Connecting to Database(A Local Database on My Machine)

const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');
const MongoURI = "mongodb://localhost:27017/tickets"

const connectToMongo = async () =>{
    await mongoose.connect(MongoURI);
    console.log("Connecting to DB");
}

module.exports = connectToMongo;
