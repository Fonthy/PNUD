const router = require('express').Router();
const { insertTicket,ticketReturned, selectAllTicket,selectPercepteur } = require('../controllers/controllerTicket')

router.post('/', insertTicket)
router.post('/ticketReturned',ticketReturned)
router.get('/selectAllTicket',selectAllTicket)
router.post('/selectPercepteur',selectPercepteur)

module.exports = router