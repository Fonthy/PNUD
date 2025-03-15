const router = require('express').Router();
const { insertService,updateService,deleteService,selectService } = require('../controllers/controllerService')

router.post('/', insertService)
router.post('/updateService',updateService)
router.post('/deleteService',deleteService)
router.post('/selectService',selectService)

module.exports = router