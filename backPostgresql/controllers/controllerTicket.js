const {Ticket} = require ('../models/ticket')

const selectAllTicket=async(req,res)=>{

    const ticket= new Ticket()
    const result= await ticket.selectAllTicket()

    console.log(result)
    if (result) {
        res.status(200).json({
            code : 200,
            message : 'selection  réussie',
            data : result
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de la selection '
        })
    }
}

const selectPercepteur=async(req,res)=>{

    const matricule=req.body.matricule
    const ticket= new Ticket()
    const result= await ticket.selectPercepteur(matricule)

    console.log(result)
    if (result) {
        res.status(200).json({
            code : 200,
            message : 'selection  réussie',
            data : result
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de la selection '
        })
    }
}

const insertTicket=async(req,res)=>{
    const code_ticket=req.body.code_ticket
    const id_nature=req.body.id_nature
    const id_percepteur=req.body.id_percepteur
    const ticket= new Ticket()

    const result= await ticket.insertTicket(code_ticket,id_nature,id_percepteur)

    if (result) {
        res.status(200).json({
            code : 200,
            message : 'insertion réussie'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de l\'insertion'
        })
    }
}

const ticketReturned=async(req,res)=>{
    const matricule=req.body.matricule
    const vendu=req.body.vendu
    const ticket= new Ticket()

    const result= await ticket.ticketReturned(vendu,matricule)
    console.log(result)
    if (result) {
        res.status(200).json({
            code : 200,
            message : 'modification réussie'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de la modification'
        })
    }
}

module.exports = {insertTicket,ticketReturned,selectAllTicket,selectPercepteur}