const router = require('express').Router();
const { insertNatureRecette, modifyRecette, getAllRecette, deleteNature, getPrice } = require('../controllers/recette');

router.post('/', insertNatureRecette)
router.post('/delete', deleteNature)
router.post('/update', modifyRecette)
router.get('/getAllRecette', getAllRecette)
router.post('/getPrice', getPrice)

module.exports = router