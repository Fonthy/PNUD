const { json } = require('express')

const {DerivationRecette} = require('../models/derivationRecette')

const insertDerivation = async (req, res) => {
    const id_mere = req.body.id_mere
    const id_fils = req.body.id_fils
    const derivation = new DerivationRecette({id_fils, id_mere})
    const result = await derivation.insert()
    if(result) {
        res.status(200).json({
            code : 200,
            message : 'OK'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur insertion insertDerivation'
        })
    }
}

const updateDerivation = async (req, res) => {
    const id = req.body.id
    const id_mere = req.body.id_mere
    const id_fils = req.body.id_fils
    const derivation = new DerivationRecette({id, id_fils, id_mere})
    const result = await derivation.update()
    if(result) {
        res.status(200).json({
            code : 200,
            message : 'OK'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur modification derivation'
        })
    }
}

const deleteDerivation = async (req, res) => {
    const id = req.body.id
    const derivation = new DerivationRecette({id})
    const result = await derivation.delete()
    if(result) {
        res.status(200).json({
            code : 200,
            message : 'OK'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur suppression derivation'
        })
    }
}

module.exports = {deleteDerivation, updateDerivation, insertDerivation}