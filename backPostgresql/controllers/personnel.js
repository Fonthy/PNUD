const {Personnel} = require('../models/personnel')

const insertPerson = async (req, res) => {
    const matricule = req.body.matricule
    const nom = req.body.nom
    const prenom = req.body.prenom
    const adress = req.body.adress
    const fonction = req.body.fonction

    const person = new Personnel({matricule, nom, prenom, adress, fonction})
    const result = await person.insert()
    if(result) {
        res.status(200).json({
            code : 200,
            message : 'personne enregistree',
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur serveur interne'
        })
    }
}

const getAllPerson = async (req, res) => {
    const person = new Personnel({})
    const result = await person.selectAllPersonnel()
    if(!result) {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de la recuperation de toutes les personnels'
        })
    } else {
        res.status(200).json({
            code : 200,
            message : 'OK',
            data : result
        })
    }
}

const updatePerson = async (req, res) => {
    const matricule = req.body.matricule
    const nom = req.body.nom
    const prenom = req.body.prenom
    const adress = req.body.adress
    const fonction = req.body.fonction

    const person = new Personnel({matricule, nom, prenom, adress, fonction})
    const result = await person.update()
    if(result) {
        res.status(200).json({
            message : 'OK',
            code : 200,
        })
    } else (
        res.status(400).json({
            message : 'erreur lors de la modification de \'utilisateur',
            code : 400
        })
    )
}

const deletePerson = async (req, res) => {
    const matricule = req.body.matricule

    const person = new Personnel({matricule})
    const result = await person.delete()
    if(result) {
        res.status(200).json({
            message : 'OK',
            code : 200,
        })
    } else (
        res.status(400).json({
            message : 'erreur lors de la suppression de \'utilisateur',
            code : 400
        })
    )
}

module.exports = {insertPerson, getAllPerson, updatePerson, deletePerson}