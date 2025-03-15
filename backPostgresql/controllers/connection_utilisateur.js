const {Utilisateur} = require ('../models/utilisateur') 

const connection=async(req,res)=>{
    const id_utilisateur=req.body.id_utilisateur
    const matricule=req.body.matricule
    const role=req.body.role
    const mdp=req.body.mdp

    const utilisateur= new Utilisateur(id_utilisateur, mdp, role)
    const result= await utilisateur.connection()
    
    if (result) {
        res.status(200).json({
            code : 200,
            message : 'connexion réussie'
        })
    } else {
        res.status(400).json({
            code : 400,
            message : 'erreur lors de la connexion'
        })
    }
}

module.exports = {connection}