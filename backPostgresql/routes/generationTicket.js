const router = require('express').Router()

const {insertGenerationTicket, updateGenerationTicket, deleteGenerationTicket } = require('../controllers/generationTicket')

router.post('/', insertGenerationTicket)
router.post('./update', updateGenerationTicket)
router.post('./delete', deleteGenerationTicket)

module.exports = router