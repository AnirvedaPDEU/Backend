const express = require('express')
const {
    getEvent,
    getSingleEvent,
    addEvent,
    updateEvent,
    deleteEvent
} = require('../Controllers/eventController')

const {
    userAdmin,
    userSuperAdmin
} = require('../MiddleWare/middleware')

const router = express.Router()

router.get('/', getEvent)

router.get('/:id', getSingleEvent)

router.post('/', userAdmin(['Admin', 'SuperAdmin']),addEvent)

router.patch('/:id',userAdmin(['Admin', 'SuperAdmin']), updateEvent)

router.delete('/:id',userAdmin(['Admin', 'SuperAdmin']), deleteEvent)

module.exports = router