const {Db} = require('../BD/db')

class Service{
    constructor(){
        this.table='service'
        this.db=new Db()
    }

    async insertService(id_nature,cin,nom,localisation){
        try {
            return await this.db.insert(this.table,['id_nature','cin','nom','localisation'],[id_nature,cin,nom,localisation])
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async updateService(id_nature,cin,id_service){
        try {
            return await this.db.update(this.table,['id_nature','cin'],[id_nature,cin],['id_service'],[id_service])
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async deleteService(id_service){
        try {
            return await this.db.delete('service','id_service=$1',id_service)
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async selectService(){
        try {
            return await this.db.selectAll('service')
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

}

module.exports = {Service}