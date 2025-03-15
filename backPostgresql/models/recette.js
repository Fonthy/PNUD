const { Db } = require('../BD/db')

class Recette {
    constructor({ id_recette, nature, label, amount, periodicity }) {
        this.id_recette = id_recette
        this.nature = nature
        this.label = label
        this.amount = amount
        this.periodicity = periodicity
        this.db = new Db()
    }
    async selectValidateNature() {
        try {
            return await this.db.selectByConstraint('nature_recette', ['validite'], ['true'], '=', 'and')
        } catch (err) {
            console.error('error select des natureRecette')
            return false
        }
    }
    async insertRecette() {
        try {
            const res = await this.db.insert('recette', ['nature', 'libelle', 'montant', 'periodicite'], [this.nature, this.label, this.amount, this.periodicity])
            return res.length == 1
        } catch (error) {
            console.error('erreur enregistrement nature recette')
            return false
        }
    }

    async selectOneNature(nom) {
        try {
            return await this.db.selectByConstraint('nature_recette', ['nom'], [nom], '=', 'and')
        } catch (error) {
            console.error('erreur lors de la recuperation des natures', error)
            return false
        }
    }

    async modifyRecette() {
        try {
            const res = await this.db.update('recette', ['nature', 'libelle', 'montant', 'periodicite'], [this.nature, this.label, this.amount, this.periodicity], ['id_recette'], [this.id_recette])
            return res.length === 1
        } catch (error) {
            console.error('erreur modification nature de recette', error.message)
            return false
        }
    }

    async getAllRecette() {
        try {
            const res = await this.db.selectAll('recette')
            return res
        } catch (error) {
            console.error('erreur lors de la recuperation des natures de nature', error)
            return false
        }
    }
}

module.exports = { Recette }

