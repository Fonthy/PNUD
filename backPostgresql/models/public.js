const {Db} = require('../BD/db')

class Public{
    constructor(){
        this.db=new Db()
    }

    async selectAllPublic() {
        try{
            const res = await this.db.selectAll(this.table)
            return res
        } catch(error) {
            console.error('erreur lors de la recuperation des personnels', error)
            return false
        }
    }

    async selectPublic(cin) {
        try{
            return await this.db.selectByConstraint('public',['cin'],[cin],'=','and')
        } catch(error) {
            console.error('erreur lors de la recuperation des personnels', error)
            return false
        }
    }

    async insertPublic(cin,nom,prenoms,adresse,fonction,contact){
        try {
            'public',['cin','nom','prenoms','adresse','fonction']
            return await this.db.insert('public',['cin','nom','prenoms','adresse','fonction','contact'],[cin,nom,prenoms,adresse,fonction,contact])
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async updatePublic(cin,nom,prenoms,adresse,fonction,contact){
        try {
            return await this.db.update(this.table,['nom','prenoms','adresse','fonction','contact'],[nom,prenoms,adresse,fonction,contact],['cin'],[cin])
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async deleteService(cin){
        try {
            return await this.db.delete(this.table,'cin=$1',cin)
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async insertPublicRequest(quantite,id_service,cin){
        try {
            const date_creation=await this.db.requette("select to_char(now(),'yyyy-mm-dd hh24:ii:ss') as date")[0]["date"]
            return await this.db.insert('demande',['quantite','date_creation','id_service','cin'],[quantite,date,id_service,cin])
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async validatePublicRequest(id_validation,montant,id_demande,id_caissier){
        try {
            const date_creation=await this.db.requette("select to_char(now(),'yyyy-mm-dd hh24:ii:ss') as date")[0]["date"]
            return await this.db.insert('validation_demande',['id_validation','date_creation','montant','id_demande','id_caissier'],[id_validation,date_creation,montant,id_demande,id_caissier])
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }
}

module.exports = {Public}