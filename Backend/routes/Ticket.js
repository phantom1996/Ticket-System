const express = require('express')
const router = express.Router();
const Tickets = require('../models/Tickets')
const Agents = require('../models/Agents')
const { body, validationResult } = require('express-validator');
const { set } = require('mongoose');





const handleAssigmment = async (ticketIdToAssign) => {
    const activeAgents = await Agents.find({ active: true }).sort({ lastAssignedTicket: 1 });
    const newAgent = {}
    const updateDate = {}
    var agentId;

    if (activeAgents) {
        for (var i in activeAgents) {
            newAgent.assignedTo = activeAgents[i].name;
            newAgent.status = "Assigned";
            agentId = activeAgents[i].id;
            updateDate.lastAssignedTicket = Date.now();
            break;
        }
        var ObjectId = require('mongodb').ObjectId;
        var ticketID = new ObjectId(ticketIdToAssign);
        var agentID = new ObjectId(agentId);
        const updateTicket = await Tickets.findOneAndUpdate(ticketID, { $set: newAgent }, { new: true });
        const updateAgent = await Agents.findOneAndUpdate(agentID, { $set: updateDate }, { new: true });
    }

}


//Create ticket using : POST  '/api/ticket/support-tickets'

router.post('/support-tickets', [
    body('severity', "Enter a Valid severity").isInt({ min: 1, max: 5 })
], async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try {
        let ticket = await Tickets.create({
            topic: req.body.topic,
            description: req.body.description,
            severity: parseInt(req.body.severity),
            type: req.body.type
        })
        res.send(ticket)

        const ticketIdToAssign = ticket.id;
        console.log(ticketIdToAssign)

        setTimeout(() => {
            handleAssigmment(ticketIdToAssign);
        }, 5000);

    } catch (error) {
        res.status(500).json({ error: "Internal server Error", message: error.message })
    }

})


//fetching all  ticket using : GET  '/api/ticket/support-tickets'


router.get('/support-tickets', async (req, res) => {
    try {

        const queryObj = { ...req.query }
        const excludeField = ["page", "sort"];
        excludeField.forEach((ele) => delete queryObj[ele]);
        let tickets = await Tickets.find(queryObj).sort({ datecreated: 1 });
        res.send(tickets)
    } catch (error) {
        res.status(500).json({ error: "Internal server Error", message: error.message })
    }

})


router.put('/update-tickets/:id', async (req, res) => {
    try {
        console.log(req.headers)
        var ObjectId = require('mongodb').ObjectId;
        var ticketID = new ObjectId(req.header.id);

        const newUpdate = {
            status: "Resolved",
            resolvedOn: new Date()
        }
        const val = await Tickets.findById(req.params.id)
        console.log(val)
        const updateTicket = await Tickets.findByIdAndUpdate(req.params.id, { $set: newUpdate }, { new: true });
        res.status(400).json(updateTicket)
        //console.log(updateTicket)
    } catch (error) {
        res.status(500).json({ error: "Internal server Error", message: error.message })
    }

})

module.exports = router;