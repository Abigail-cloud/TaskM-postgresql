const express = require('express');
const router = express.Router()

const {
    getAllTasks,
    getSingleTask,
    createTasks,
    updateTask,
    deleteTask
}   = require('../controllers/task')

router.route('/tasks').get(getAllTasks).post(createTasks)
router.route('/task/:id').get(getSingleTask).put(updateTask).delete(deleteTask)