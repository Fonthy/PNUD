const router = require('express').Router();
const {connection} = require('../controllers/connection_utilisateur')

router.post('/',connection)

module.exports = router
