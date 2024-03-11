const Task = require('../entities/task.entity');

module.exports = {
    async get(req, res) {
        try {
            const tasks = await Task.find();

            if(!tasks) {
                return res.status(404).json({message: 'Tasks not found!'});
            }

            res.status(200).json({tasks});
        } catch (error) {
            return res.status(500).json({message: 'Internal server error!'});
        }
    },
    async create(req, res) {
        try {
            const {title , status, priority, description} = req.body;
            const newTask = new Task({title, status, priority, description});

            newTask.save();

            return res.status(201).json({newTask, message: 'Task created!'});
        } catch (error) {
            return res.status(500).json({message: 'Internal server error!'});
        }
    },
    async update(req, res) {
        try {
            const id = req.params.id;
            const { title, status, priority, description } = req.body;
            const updatedTask = await Task.findByIdAndUpdate(id, { title, status, priority, description });

            if(!updatedTask){
                return res.status(404).json({message: 'Task not found!'});
            }

            return res.status(200).json({updatedTask, message: 'Task updated!'});
        } catch (error) {
            return res.status(500).json({message: 'Internal server error!'});
        }
    },
    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedTask = await Task.findByIdAndDelete(id);

            if(!deletedTask){
                return res.status(404).json({message: 'Task not found!'});
            }

            return res.status(200).json({message: 'Task deleted!'});
        } catch (error) {
            return res.status(500).json({message: 'Internal server error!'});
        }
    }
}