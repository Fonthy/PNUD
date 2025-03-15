const {GenerationTicket} = require('../models/generationTicket')

const insertGenerationTicket = async (req, res) => {
    const nombre_de_ticket = req.body.nombre_de_ticket
    const date_creation = req.body.date_creation
    const id_ticket = req.body.id_ticket
    const id_caissier = req.body.id_caissier
    const generationTicket = new GenerationTicket({nombre_de_ticket, date_creation, id_ticket, id_caissier})
    const result = await generationTicket.insert()
    if(result) {
        res.status(200).json({
            code : 200,
            message : 'OK'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur insertion insertGenerationTicket'
        })
    }
}

const updateGenerationTicket = async (req, res) => {
    const id_generation = req.body.id_generation
    const nombre_de_ticket = req.body.nombre_de_ticket
    const date_creation = req.body.date_creation
    const id_ticket = req.body.id_ticket
    const id_caissier = req.body.id_caissier
    const generationTicket = new GenerationTicket({id_generation, nombre_de_ticket, date_creation, id_ticket, id_caissier})
    const result = await generationTicket.update()
    if(result) {
        res.status(200).json({
            code : 200,
            message : 'OK'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur mise a jour updateGenerationTicket'
        })
    }
}

const deleteGenerationTicket = async (req, res) => {
    const id_generation = req.body.id_generation
    const generationTicket = new GenerationTicket({id_generation})
    const result = await generationTicket.update()
    if(result) {
        res.status(200).json({
            code : 200,
            message : 'OK'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur mise a jour updateGenerationTicket'
        })
    }
}

module.exports = {deleteGenerationTicket, updateGenerationTicket, insertGenerationTicket}