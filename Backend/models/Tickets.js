const mongoose = require('mongoose');
const {Schema} = mongoose
const TicketSchema = new Schema({
    topic : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    datecreated : {
        type : Date,
        default : Date.now
    },
    severity : {
        type : Number,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    assignedTo : {
        type : String,
        default: null
    },
    status : {
        type:String,
        default : "New"
    },
    resolvedOn : {
        type : String,
        default : "Not Resolved"
    }

})
const Tickets = mongoose.model('ticket', TicketSchema);
Tickets.createIndexes();
module.exports = Tickets