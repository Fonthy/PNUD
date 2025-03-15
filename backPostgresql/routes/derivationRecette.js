const router = require('express').Router()
const {deleteDerivation, updateDerivation, insertDerivation} = require('../controllers/derivationRecette')

router.post('/', insertDerivation)
router.post('/delete', deleteDerivation )
router.post('/update', updateDerivation)

module.exports = router