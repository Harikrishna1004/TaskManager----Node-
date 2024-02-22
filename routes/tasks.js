const express = require('express');
const { getAllTasks, addTask, getATask } = require('../controller/tasks')
const router = express.Router();

//api to get all tasks
router.route('/').get(getAllTasks);

//api to create a task
router.route('/').post(addTask);

//api to get a single task
router.route('/:id', getATask);
//api to update a task
//api to delete a task


module.exports = router;