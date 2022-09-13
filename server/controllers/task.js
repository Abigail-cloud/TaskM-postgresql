const pool = require('../db');
const asyncBox = require('../middleware/async');
const { customErrorWrap } = require('../errors/custom-error');

const getAllTasks = asyncBox(async(req, res) => {
    const allTasks = await pool.query('SELECT * FROM task')
 res.status(200).json(allTasks.rows)
})



const getSingleTask = asyncBox(async (req, res, next) => {
    const {id} = req.params;
    const getTask = await pool.query('SELECT * FROM task WHERE task_id =$1',
        [id])
        
    if (!getTask.rows[0]) {
            return next(customErrorWrap(`Task not found with: ${id}`, 404)) 
        }
    res.status(200).json(getTask.rows[0])
})



const createTasks = asyncBox(async (req, res) => {
    const { description } = req.body
    const newTask = await pool.query(
        "INSERT INTO task (description) VALUES ($1) RETURNING *",
        [description]
    )
   res.json(newTask.rows[0])
})


const updateTask = asyncBox(async(req, res, next) => {
    const { id } = req.params;
    const { description } = req.body;
    
    const updateTask = await pool.query('UPDATE task SET description = $1 WHERE task_id = $2',
        [description, id])
    //If the task id is not available
        if (!updateTask) {
            return next(customErrorWrap(`Task not found with: ${id}`, 404)) 
        }
res.status(201).json('Task was updated')
})


const deleteTask = asyncBox(async(req, res, next) => {
    const { id } = req.params;
    const task = await pool.query('DELETE FROM task WHERE task_id=$1',
        [id])
    res.status(200).json(`Task  was deleted sucessfully!!`)
}
)


module.exports = {
    getAllTasks,
    getSingleTask,
    createTasks,
    updateTask,
    deleteTask
}