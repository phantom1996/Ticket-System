//Connecting to Database(A Local Database on My Machine)

const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');
const MongoURI = "mongodb+srv://sharadnailwal96:IewDhcIt9KjT71yN@ticket-system.jnfjdyx.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = async () =>{
    await mongoose.connect(MongoURI);
    console.log("Connecting to DB");
}

module.exports = connectToMongo;
