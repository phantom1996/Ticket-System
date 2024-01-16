const express = require('express')
const router = express.Router();
const Agents= require('../models/Agents')
const {body , validationResult} = require('express-validator')


//Create Agent using : POST  '/api/auth/support-agents'

router.post('/support-agents',[
    body('email', "Enter a valid email").isEmail(),
    body('phonenumber', "Enter a Valid phonenumber").isLength({ min: 10, max: 10})
],async (req, res) =>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }

    //If Email Already exist
    const ExAgent = await Agents.findOne({ email: req.body.email })
    if (ExAgent) {
        return res.status(400).json({ messgae: "Email already Exist" })
    }

    try {
        const agent = await Agents.create({
            name: req.body.name,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            description: req.body.description
        })
        res.send(agent)
        
    } catch (error) {
        res.status(500).json({error:"Internal server Error", message:error.message})
    }

})

module.exports = router;