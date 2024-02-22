const Task = require('../models/tasks')

const getAllTasks = async(req, res) => {
    const tasks = await Task.find({})
    res.json(tasks);
}

const addTask = async(req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

const getATask = async(req, res) => {
    const { id } = req.params.id;
    const task = await Task.findById(id);
    res.status(200).json({ task });
}

module.exports = { getAllTasks, addTask, getATask };