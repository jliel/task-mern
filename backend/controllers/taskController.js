const asyncHandler = require('express-async-handler');
const Task = require('../models/taskModel');

const getTasks = asyncHandler(async (req, res) => {
    //res.status(200).json({message: 'Get all tasks'});
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

const setTask = asyncHandler(async (req, res) => {
    console.log(req.body.text);
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please enter a task');
    }
    //res.status(200).json({message: 'Create Task'});
    const task = await Task.create({ text: req.body.text })

    res.status(200).json(task);
});

const updateTask = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Task ${req.params.id} updated.`});
});

const deleteTask = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Task ${req.params.id} deleted.`});
});

module.exports = { getTasks, setTask, updateTask, deleteTask }