const {Db} = require('../BD/db')

class ValidationDemande{
    constructor({id, montant, date_creation, id_demande, id_caissier}){
        this.id = id
        this.date_creation = date_creation
        this.id_demande = id_demande
        this.id_caissier = id_caissier
        this.db = new Db()
    }

    async insert(){
        try{
            const res = this.db.insert('validation_demande',['montant', 'date_creation', 'id_demande', 'id_caissier'],[this.montant, this.date_creation, this.id_demande, this.id_caissier])
            return res != 0
        } catch(err) {
            console.error('erreur insertion validation demande', err)
            return false
        }
    }

    async update() {
        try{   
            const res = await this.db.update('validation_demande',['montant', 'date_creation', 'id_demande', 'id_caissier'],[this.montant, this.date_creation, this.id_demande, this.id_caissier],['id_validation'], [this.ValidationDemande])
            return res.length !== 0
        } catch (error) {
            console.error('erreur lors de la modification du personne', message)
            return false
        }
    } 

    async delete() {
        try{
            const res = await this.db.delete()
            return res != 0
        } catch (error) {
            console.error('erreur lors de la suppression de validation demande ')
        }
    }
}

module.exports = {ValidationDemande}