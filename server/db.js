const Pool = require('pg').Pool;


const pool = new Pool({
    user: "postgres",
    password: "lordmy43a",
    host:"localhost",
    database: "taskmanager",
    port: 5432
})


module.exports = pool;