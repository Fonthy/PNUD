const {Db} = require('../BD/db')

class Ticket{
    constructor(){
        this.db=new Db
        this.table='ticket'
    }

    async selectAllTicket() {
        try{
            const generation_ticket = await this.db.requette('select id_caissier, nombre_de_ticket from generation_ticket order by id_generation asc')
            const ticket = await this.db.requette('select * from ticket order by id_ticket asc')
            var i=0,j=0
            while (i<generation_ticket.length) {
                while (j<=generation_ticket[i]["nombre_de_ticket"]) {
                    ticket[j]["caissier"]=generation_ticket[i]["id_caissier"]
                    j++
                }
                i++
            }
            return ticket
        } catch(error) {
            console.error('erreur lors de la recuperation des tickets', error)
            return false
        }
    }

    async insertTicket(code_ticket,id_nature,id_percepteur){
        try {
            const now = new Date();

            const jour = now.getDate();
            const mois = now.getMonth() + 1;
            const annee = now.getFullYear();

            const heures = now.getHours();
            const minutes = now.getMinutes();
            const secondes = now.getSeconds();

            const date_creation=(`${jour}/${mois}/${annee} ${heures}:${minutes}:${secondes}`);
            return await this.db.insert(this.table,['code_ticket','id_nature','id_percepteur','retour','date_creation'],[code_ticket,id_nature,id_percepteur,false,date_creation])
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async selectPercepteur(matricule) {
        try{
            return await this.db.requette("select generation_ticket.nombre_de_ticket as nombre_ticket from generation_ticket,percepteur where generation_ticket.id_percepteur=percepteur.id_percepteur and percepteur.matricule='"+matricule+"' order by generation_ticket.id_generation desc limit 1")
        } catch(error) {
            console.error('erreur lors de la recuperation des tickets', error)
            return false
        }
    }

    async ticketReturned(nb,matricule){
        try {
            var result
            var id=await this.db.requette("select generation_ticket.id_ticket from generation_ticket, percepteur where generation_ticket.id_percepteur=percepteur.id_percepteur and percepteur.matricule='"+matricule+"' order by generation_ticket.id_ticket desc limit 1")
            var id_ticket=parseInt(id[0]['id_ticket'],10)
            for (let i = 0; i < nb; i++) {
                id_ticket+=i
                result=await this.db.update(this.table,['retour'],['true'],['id_ticket=$2'],[id_ticket])
            }
            return result
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }
}

module.exports = {Ticket}