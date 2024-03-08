const express = require('express')
const controller = require('../controllers/task.controller')
const taskRoutes = express.Router()

taskRoutes.get('/tasks/', controller.get);
taskRoutes.post('/tasks/', controller.create);
taskRoutes.put('/tasks/:id', controller.update);
taskRoutes.delete('/tasks/:id', controller.delete);


module.exports = taskRoutes