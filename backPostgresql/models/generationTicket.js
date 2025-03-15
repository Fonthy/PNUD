const {Db} = require('../BD/db')

class GenerationTicket {
    constructor({id_generation, nombre_de_ticket, date_creation,id_caissier, id_ticket}) {
        this.id_generation = id_generation
        this.nombre_de_ticket = nombre_de_ticket
        this.date_creation = date_creation
        this.id_ticket = id_ticket
        this.id_caissier = id_caissier
        this.db = new Db()
    }

    async insert() {
        try{
            const res = this.db.insert('generation_ticket',['nombre_de_ticket', 'date_creation', 'id_caissier', 'id_ticket'],[this.nombre_de_ticket, this.date_creation, this.id_caissier, this.id_ticket])
            if(res != 0) return true
            else return false
        } catch(err) {
            console.error('Insertion generationTicket incorrect', err)
            return false
        }
    }

    async update() {
        try{
            const res = this.db.insert('generation_ticket',['nombre_de_ticket', 'date_creation', 'id_caissier', 'id_ticket'],[this.nombre_de_ticket, this.date_creation, this.id_caissier, this.id_ticket],['id_generation'], [this.id_generation])
            if(res != 0) return true
            else return false
        } catch(err) {
            console.error('Mise a jour generationTicket incorrect', err)
            return false
        }
    }

    async delete() {
        try{
            const res = this.db.insert('generation_ticket',['id_generation = $1'],[this.id_generation])
            if(res != 0) return true
            else return false
        } catch(err) {
            console.error('Mise a jour generationTicket incorrect', err)
            return false
        }
    }
}

module.exports = {GenerationTicket}