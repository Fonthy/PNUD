const {Db} = require('../BD/db')

class DerivationRecette {
    constructor ({id, id_mere, id_fils}) {
        this.id = id
        this.id_mere = id_mere
        this.id_fils = id_fils
        this.db = new Db()
    }

    async insert() {
        try{
            const res = await this.db.insert('derivation_recette', ['id_mere', 'id_fils'], [this.id_mere, this.id_fils])
            return res.length == 1
        } catch (error) {
            console.error('error insert derivation recette', error) 
            return false
        }
        
    }

    async update() {
        try{
            const res = await this.db.update('derivation_recette', ['id_mere', 'id_fils'], [this.id_mere, this.id_fils],['id_derivation'], [this.id])
            return res.length === 1
        } catch (error) {
            console.error('erreur modification derivation recette', error.message)
            return false
        }
    }

    async delete() {
        try{
            const res = await this.db.delete('derivation_recette', 'id_derivation = $1', [this.id])
            return res !== 0
        } catch(err) {
            console.error('erreur suppression de derivation')
            return false
        }
    }
}

module.exports = {DerivationRecette}