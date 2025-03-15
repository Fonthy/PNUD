const {ValidationDemande} = require('../models/validationDemande')

const insertValidationDemande = async(req, res) => {
    const date_creation = req.body.date_creation
    const id_demande = req.body.id_demande
    const id_caissier = req.body.id_caissier

    const validationDemande = new ValidationDemande({date_creation, id_demande, id_caissier})
    const result = await validationDemande.insert()
    if(result) {
        res.status(200).json({
            code : 200,
            message : 'OK'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'Erreur'
        })
    }
}

const updateValidationDemande = async(req, res) => {
    const date_creation = req.body.date_creation
    const id_demande = req.body.id_demande
    const id_caissier = req.body.id_caissier
    const id = req.body.id

    const validationDemande = new ValidationDemande({id, date_creation, id_demande, id_caissier})
    const result = await validationDemande.update()
    if(result) {
        res.status(200).json({
            code : 200,
            message : 'OK'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'Erreur'
        })
    }
}

const deleteValidationDemande = async(req, res) => {
    const id = req.body.id

    const validationDemande = new ValidationDemande({id})
    const result = await validationDemande.delete()
    if(result) {
        res.status(200).json({
            code : 200,
            message : 'OK'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'Erreur'
        })
    }
}


module.exports = {updateValidationDemande, insertValidationDemande, deleteValidationDemande}