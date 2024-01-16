const mongoose = require('mongoose');
const {Schema} = mongoose
const AgentSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phonenumber : {
        type : String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    active : {
        type :Boolean,
        default : true
    },
    dateCreated : {
        type : Date,
        default : Date.now
    }
})
const Agents = mongoose.model('agents', AgentSchema);
Agents.createIndexes();
module.exports = Agents;