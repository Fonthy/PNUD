const {Admin} = require ('../models/admin')

const insertUser=async(req,res)=>{
    const matricule=req.body.matricule
    const mdp=req.body.mdp
    const role=req.body.role
    const admin= new Admin()

    const result= await admin.insertUser(matricule,mdp,role)

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

const connection=async(req,res)=>{
    const matricule=req.body.matricule
    const mdp=req.body.mdp
    const admin= new Admin(matricule,mdp)

    const result= await admin.connection()

    if (result) {
        res.status(200).json({
            code : 200,
            message : 'connexion réussie',
            data : {
                role : result.role
            }
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de l\'authentification'
        })
    }
}

const searchUser=async(req,res)=>{
    const matricule=req.body.matricule
    const role=req.body.role
    const admin= new Admin()

    const result= await admin.searchUser(matricule,role)

    if (result) {
        res.status(200).json({
            code : 200,
            message : 'recherche d\'utilisateur réussie'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors du recherche de l\'utilisateur'
        })
    }
}

const selectUser=async(req,res)=>{
    const role=req.body.role
    const admin= new Admin()

    const result= await admin.selectUser(role)

    if (result) {
        res.status(200).json({
            code : 200,
            message : 'selection des utilisateurs réussie'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors des selection des utilisateurs'
        })
    }
}

const deleteUser=async(req,res)=>{
    const matricule=req.body.matricule
    const role=req.body.role
    const admin= new Admin()

    const result= await admin.deleteUser(matricule,role)

    if (result) {
        res.status(200).json({
            code : 200,
            message : 'suppression d\'utilisateur réussie'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de l\'suppression de l\'utilisateur'
        })
    }
}

const updateUser=async(req,res)=>{
    const matricule=req.body.matricule
    const mdp=req.body.mdp
    const role=req.body.role

    const admin= new Admin()
    const result= await admin.updateUser(matricule,mdp,role)

    if (result) {
        res.status(200).json({
            code : 200,
            message : 'modification d\'utilisateur réussie'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de l\'modification de l\'utilisateur'
        })
    }
}

module.exports = {insertUser,connection,searchUser,selectUser,updateUser,deleteUser}
