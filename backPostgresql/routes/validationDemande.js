const router = require('express').Router();
const {insertValidationDemande, updateValidationDemande, deleteValidationDemande} = require('../controllers/validationDemande')

router.post('/', insertValidationDemande)
router.post('/delete', deleteValidationDemande )
router.post('/update', updateValidationDemande)

module.exports = router