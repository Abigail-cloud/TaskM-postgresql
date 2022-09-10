
const pool = require('./db');
const asyncBox = require('../middleware/async')

const getAllTasks = asyncBox(async(req, res) => {
    res.send('Get all tasks')
})
const getSingleTask = asyncBox(async (req, res) => {
    res.send('Get a task')
})
const createTasks = asyncBox(async(req, res) => {
    res.send('Post tasks')
})
const updateTask = asyncBox(async(req, res) => {
    res.send('Put task')
})
const deleteTask = asyncBox(async(req, res) => {
    res.send('Delete task')
}
)


module.exports = {
    getAllTasks,
    getSingleTask,
    createTasks,
    updateTask,
    deleteTask
}