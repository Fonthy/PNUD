const { json } = require('express')
const { Recette } = require('../models/recette')

const insertRecette = async (req, res) => {
    const nom = req.body.nom
    const montant = req.body.montant
    const type = req.body.type
    const natureRecette = new NatureRecette({ nom, montant, type })
    const result = await natureRecette.insert()
    if (result) {
        res.status(200).json({
            code: 200,
            message: 'OK'
        })
    } else {
        res.status(400).json({
            code: 400,
            message: 'erreur insertion nature'
        })
    }
}

const modifyRecette = async (req, res) => {
    const nature = req.body.nature
    const label = req.body.label
    const amount = req.body.amount
    const id_recette = req.body.id_recette
    const periodicity = req.body.periodicity
    const recette = new Recette({ id_recette, nature, label, amount, periodicity })
    const result = await recette.modifyRecette()
    if (result) {
        res.status(200).json({
            code: 200,
            message: 'OK'
        })
    } else {
        res.status(400).json({
            code: 400,
            message: 'erreur update nature'
        })
    }
}

const deleteNature = async (req, res) => {
    const validation = req.body.validation
    const id = req.body.id
    const natureRecette = new NatureRecette({ validation, id })
    const result = await natureRecette.update()

    if (result) {
        res.status(200).json({
            code: 200,
            message: 'OK'
        })
    } else {
        res.status(400).json({
            code: 400,
            message: 'erreur delete nature'
        })
    }
}

const getAllRecette = async (req, res) => {
    const recette = new Recette({})
    const result = await recette.getAllRecette()
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: result
    })
}

const getPrice = async (req, res) => {
    const nature = req.body.nature
    const natureRecette = new NatureRecette({})
    const result = await natureRecette.selectOneNature(nature)
    console.log(result)
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: result
    })
}


module.exports = { insertNatureRecette, modifyRecette, getAllRecette, getPrice, deleteNature }