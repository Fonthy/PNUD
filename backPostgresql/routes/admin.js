const router = require('express').Router();
const { insertUser,connection,updateUser,deleteUser,searchUser,selectUser } = require('../controllers/controllerAdmin')

router.post('/', insertUser)
router.post('/connection', connection)
router.post('/updateUser', updateUser)
router.post('/deleteUser', deleteUser)
router.post('/searchUser', searchUser)
router.post('/selectUser', selectUser)
module.exports = router