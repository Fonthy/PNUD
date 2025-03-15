const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('db.db')

module.exports = db