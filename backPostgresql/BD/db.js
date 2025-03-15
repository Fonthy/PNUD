const { Pool } = require('pg')

class Db extends Pool {
  constructor() {
    super({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'chrysler0862',
      database: 'recettelocale',
      idleTimeoutMillis: 30000
    })
  }

  async selectAll(tableName) {
    try {
      const query = `SELECT * FROM ${tableName}`
      const res = await this.query(query)
      return res.rows
    } catch (err) {
      console.error('Error executing selectAll query', err.stack)
      throw err
    }
  }

  async selectByConstraint(tableName, columns, values, action, operator) {
    try {
      const constraint = columns.map((column, index) => `${column} ${action} $${index + 1}`).join(` ${operator} `);
      const query = {
        text: `SELECT * FROM ${tableName} WHERE ${constraint}`,
        values: values
      };
      console.log(query.text);
      const res = await this.query(query);
      console.log(res.rows)
      return res.rows
    } catch (err) {
      console.error('Error executing selectByConstraint query:', err.message);
      throw err;
    }
  }


  async insert(tableName, columns, values) {
    try {
      const query = {
        text: `INSERT INTO ${tableName}(${columns.join(', ')}) VALUES(${columns.map((_, index) => `$${index + 1}`).join(', ')}) RETURNING *`,
        values: values
      }
      const res = await this.query(query)
      return res.rows
    } catch (err) {
      console.error('Error executing insert query', err.stack)
      throw err
    }
  }

  async update(tableName, columns, values, condition, conditionValues) {
    try {
      const setClause = columns.map((column, index) => `${column} = $${index + 1}`).join(', ');
      const query = {
        text: `UPDATE ${tableName} SET ${setClause} WHERE ${condition}`,
        values: [...values, ...conditionValues]
      };
      console.log(query.text)
      const res = await this.query(query);
      return res;
    } catch (err) {
      console.error('Error executing update query', err.stack);
      throw err;
    }
  }

  async delete(tableName, conditionValues, condition) {
    try {
      const query = {
        text: `DELETE FROM ${tableName} WHERE ${condition}`,
        values: conditionValues
      };
      const res = await this.query(query)
      return res.rowCount
    } catch (err) {
      console.error('Error executing delete query', err.stack)
      throw err
    }
  }

  async requette(req) {
    try {
      const query = {
        text: req
      }
      const res = await this.query(query)
      return res.rows
    } catch (err) {
      console.error('Error query', err.stack)
      throw err
    }
  }
}

module.exports = { Db }
