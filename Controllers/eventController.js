const { default: mongoose } = require('mongoose')

const Event = require('../Models/eventSchema')

// Get all event details.

const getEvent = async (req,res) => {
    const event = await Event.find({}).sort({createdAt: -1})

    res.status(201).json(event)
}

// Get an individual event

const getSingleEvent = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Not a valid DB id.'})
    }

    const event = await Event.findById(id)

    if(!event) {
        return res.status(404).json({error: 'Unable to find event with this id.'})
    }

    res.status(200).json(event)
}

// Add an event details

const addEvent = async (req,res) => {
    const { Name, Date, Timing, Venue} = req.body

    try{
    const event = await Event.create({Name, Date, Timing, Venue})
    res.status(200).json(event)
    }
    catch(error) {
        return res.status(404).json({error: 'Unable to create a event detail.'})
    }
}

// Update detail

const updateEvent = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Not a valid DB id.'})
    }

    const event = await Event.findOneAndUpdate({_id: id}, req.body , {
        runValidators: true,
        new: true
    })

    if(!event) {
        return res.status(404).json({error: 'Unable to find event with this id.'})
    }

    res.status(200).json(event)
}

// Delete a event detail

const deleteEvent = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Not a valid DB id.'})
    }

    const event = await Event.findOneAndDelete({_id: id})

    if(!event) {
        return res.status(404).json({error: 'Unable to find event with this id.'})
    }

    res.status(200).json(event)
}

module.exports = {
    getEvent,
    getSingleEvent,
    addEvent,
    updateEvent,
    deleteEvent
}