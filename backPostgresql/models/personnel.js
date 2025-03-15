const {Db} = require('../BD/db')

class Personnel {
    constructor({matricule = null, nom = null, prenom = null, adress = null, fonction = null}){
        this.matricule = this.matricule
        this.nom = nom
        this.prenom = prenom
        this.adress = adress
        this.fonction = fonction
        this.db = new Db()
    }

    async insert(){
        try{
            const res = this.db.insert('personnel',['matricule', 'nom', 'prenom', 'adress', 'fonction'],[this.matricule, this.nom, this.prenom, this.adress, this.fonction])
            if(res != 0) return true
            else return false
        } catch(err) {
            console.error('Insertion personnel incorrect', err)
            return false
        }
    }

    async selectAllPersonnel() {
        try{
            const res = await this.db.selectAll('personnel')
            return res
        } catch(error) {
            console.error('erreur lors de la recuperation des personnels', error)
            return false
        }
    }

    async update() {
        try{   
            const res = await this.db.update(
                'personnel',
                ['nom', 'prenom', 'adress', 'fonction'],
                [this.nom, this.prenom, this.adress, this.fonction],
                ['matricule'],
                [this.matricule]
            )
            return res.length !== 0

        } catch (error) {
            console.error('erreur lors de la modification du personne', message)
            return false
        }
    }

    async delete() {
        try{
            const res = await this.db.delete('personnel',['matricule'],[this.matricule])
            return res != 0

        } catch(err) {
            console.error('erreur lors de suppression de personnel ', message)
            return false
        }

    }

}

module.exports = {Personnel}