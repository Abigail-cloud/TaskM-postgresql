const Pool = require('pg').Pool;


const pool = new Pool({
    user: "postgres",
    password: "l",
    host:"localhost",
    database: "taskmanager",
    port: 5432
})


module.exports = pool;