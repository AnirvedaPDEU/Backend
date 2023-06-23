const express = require('express')
const {
    getEvent,
    getSingleEvent,
    addEvent,
    updateEvent,
    deleteEvent
} = require('../Controllers/eventController')

const router = express.Router()

router.get('/', getEvent)

router.get('/:id', getSingleEvent)

router.post('/', addEvent)

router.patch('/:id', updateEvent)

router.delete('/:id', deleteEvent)

module.exports = router