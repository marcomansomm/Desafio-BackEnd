const Task = require('../entities/task.entity');

module.exports = {
    async get(req, res) {
        const tasks = await Task.find();
        res.status(200).json({
            tasks,
        });
    }
}