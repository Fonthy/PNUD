const {Db} = require('../BD/db')

class Utilisateur{
    constructor(matricule, mdp, role){
        this.matricule=matricule
        this.mdp=mdp
        this.role=role
        this.db=new Db
    }

    async connection(){
        try {
            return await this.db.selectByConstraint(this.role,['matricule','mot_de_passe'],[this.matricule,this.mdp],'=','&')!=0
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }
}

module.exports = {Utilisateur}