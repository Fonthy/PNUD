const {Public} = require ('../models/public')


const insertPublic=async(req,res)=>{
    const cin=req.body.cin
    const nom=req.body.nom
    const prenoms=req.body.prenoms
    const adresse=req.body.adresse
    const fonction=req.body.fonction
    const contact=req.body.contact
    console.log(cin)
    const public= new Public()


    const result= await public.insertPublic(cin,nom,prenoms,adresse,fonction,contact)

    if (result) {
        res.status(200).json({
            code : 200,
            message : 'insertion d\'utilisateur réussie'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de l\'insertion de l\'utilisateur'
        })
    }
}

const insertPublicRequest=async(req,res)=>{
    const quantite=req.body.quantite
    const id_public=req.body.id_public
    const cin=req.body.cin
    const public= new Public()


    const result= await public.insertPublicRequest(quantite,id_public,cin)

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

const selectAllPublic=async(req,res)=>{

    const public= new Public()
    const result= await public.selectAllPublic()

    if (result) {
        res.status(200).json({
            code : 200,
            message : 'selection  réussie'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de la selection '
        })
    }
}

const selectPublic=async(req,res)=>{
    const cin=req.body.cin
    console.log(cin)
    const public= new Public()

    const result= await public.selectPublic(cin)
    console.log(result)
    if (result) {
        res.status(200).json({
            code : 200,
            message : 'ok',
            data : result
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'niet nada'
        })
    }
}

const deletePublic=async(req,res)=>{
    const cin=req.body.cin
    const public= new public()

    const result= await public.deletePublic(cin)

    if (result) {
        res.status(200).json({
            code : 200,
            message : 'suppression réussie'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de la suppression '
        })
    }
}

const updatePublic=async(req,res)=>{
    const cin=req.body.cin
    const nom=req.body.nom
    const prenoms=req.body.prenoms
    const adresse=req.body.adresse
    const fonction=req.body.fonction
    const contact=req.body.contact

    const public= new public()
    const result= await public.updatePublic(cin,nom,prenoms,adresse,fonction,contact)

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

const validatePublicRequest=async(req,res)=>{
    const id_validation=req.body.id_validation
    const montant=req.body.montant
    const id_demande=req.body.id_demande
    const id_caissier=req.body.id_caissier
    const public= new Public()


    const result= await public.validatePublicRequest(id_validation,montant,id_demande,id_caissier)

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

module.exports = {insertPublic,insertPublicRequest,validatePublicRequest,updatePublic,deletePublic,selectAllPublic,selectPublic}