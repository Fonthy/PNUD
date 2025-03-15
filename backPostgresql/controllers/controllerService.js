const {Service} = require ('../models/service')


const insertService=async(req,res)=>{
    const cin=req.body.cin
    const nature=req.body.nature
    const idNature=req.body.idNature
    const localisation=req.body.localisation
    const service= new Service()


    const result= await service.insertService(idNature,cin,nature,localisation)
    console.log(result)
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




const selectService=async(req,res)=>{

    const service= new Service()
    const result= await service.selectUser()

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

const deleteService=async(req,res)=>{
    const id_service=req.body.id_service
    const service= new Service()

    const result= await service.deleteService(id_service)

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

const updateService=async(req,res)=>{
    const id_nature=req.body.id_nature
    const cin=req.body.cin
    const id_service=req.body.id_service

    const service= new Service()
    const result= await service.updateService(id_nature,cin,id_service)

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

module.exports = {insertService,updateService,selectService,deleteService}