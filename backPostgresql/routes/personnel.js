const router = require('express').Router();
const {insertPerson, deletePerson, updatePerson,getAllPerson} = require('../controllers/personnel')

router.post('/', insertPerson)
router.post('/delete', deletePerson )
router.post('/update', updatePerson)
router.get('/', getAllPerson)

module.exports = router