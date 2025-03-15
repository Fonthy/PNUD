const router = require('express').Router();
const {insertPublic,insertPublicRequest,validatePublicRequest,updatePublic,deletePublic,selectAllPublic,selectPublic} = require('../controllers/controllerPublic')

router.post('/',insertPublic)
router.post('/insertPublicRequest',insertPublicRequest)
router.post('/validatePublicRequest',validatePublicRequest)
router.post('/updatePublic',updatePublic)
router.post('/deletePublic',deletePublic)
router.post('/selectAllPublic',selectAllPublic)
router.post('/selectPublic',selectPublic)

module.exports = router