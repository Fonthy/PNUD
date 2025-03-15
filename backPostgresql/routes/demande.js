const router = require('express').Router();
const {historicSelect} = require('../controllers/controllerDemande')

router.get('/',historicSelect)

module.exports = router