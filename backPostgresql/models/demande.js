const { DB, Db } = require('../BD/db')
const { deleteNature } = require('../controllers/recette')

class Demande {
    constructor({ id, quantite, date, id_service, cin }) {
        this.id = id
        this.quantite = quantite
        this.date = date,
            this.id_service = id_service
        this.cin = cin
        this.db = new Db()
    }

    async historicSelect() {
        try {
            return await this.db.requette("select demande.*,service.*,demande.quantite*nature_recette.montant as montant  from demande, service,nature_recette where demande.id_service=service.id_service and nature_recette.id_nature=service.id_nature")
        } catch (error) {
            console.error('erreur lors de la recuperation des personnels', error)
            return false
        }
    }

    async insert() {
        try {
            const res = this.db.insert('demande', ['quantite', 'date_creation', 'id_service', 'cin'], [this.quantite, this.date, this.id_service, this.cin])
            return res != 0
        } catch (error) {
            console.error('error lors de l\'insertion de demande')
        }
    }

    async update() {
        try {
            const res = this.db.update('demande', ['quantite', 'date_creation', 'id_service', 'cin'], [this.quantite, this.date, this.id_service, this.cin], ['id_demande'], [this.id])
            return res.lenght !== 0
        } catch (error) {
            console.error('error lors de la mise a jour de demande')
            return false
        }
    }

    async delete() {
        try {
            const res = this.db.delete('demande', 'id_demande = $1', [this.id])
            return res != 0
        } catch (error) {
            console.error('erreur lors de la modification du demande', error.message)
            return false
        }
    }

}

module.exports = { Demande }