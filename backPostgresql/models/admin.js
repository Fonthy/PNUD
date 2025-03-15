const {Db} = require('../BD/db')

class Admin{
    constructor(matricule,mdp){
        this.db=new Db()
        this.matricule=matricule
        this.mdp=mdp
    }

    async connection(){
        try {
            console.log(this.matricule, this.mdp)
            let role = ''
            let isConnect = true
            // const res = await this.db.selectByConstraint('admin',['matricule','mot_de_passe'],[this.matricule, this.mdp],'=','and')
            // if(res.length != 0) {
            //     let role = ''
            //     if(await this.db.selectByConstraint('admin'))
            // }

            // return res.length != 0
            if( (await this.db.selectByConstraint('admin', ['matricule','mot_de_passe'],[this.matricule, this.mdp],'=','and')).length != 0){
                role = 'admin'
            } else if ((await this.db.selectByConstraint('controleur', ['matricule','mot_de_passe'],[this.matricule, this.mdp],'=','and')).length != 0) {
                role = 'controleur'
            } else if ( (await this.db.selectByConstraint('caissier', ['matricule','mot_de_passe'],[this.matricule, this.mdp],'=','and')).length != 0 ) {
                role = 'caissier'
            } else if ( (await this.db.selectByConstraint('percepteur', ['matricule','mot_de_passe'],[this.matricule, this.mdp],'=','and')).length != 0 ) {
                role = 'percepteur'
            } else isConnect = false

            return {
                role, isConnect
            }
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async insertUser(matricule,mdp,role){
        try {
            return await this.db.insert(role,['matricule','mdp'],[matricule,mdp])
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async updateUser(matricule,mdp,role){
        try {
            return await this.db.update(role,['matricule','mot_de_passe'],[matricule,mdp],['matricule'],[matricule])
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async deleteUser(matricule,role){
        try {
            return await this.db.delete(role,'matricule=$1',matricule)
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async selectUser(role){
        try {
            return await this.db.requette("select * from "+role+", personnel where personnel.matricule="+role+".matricule")
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async searchUser(matricule,role){
        try {
            return await this.db.requette("select * from "+role+", personnel where personnel.matricule="+role+".matricule && matricule="+matricule)
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }
}

module.exports = {Admin}