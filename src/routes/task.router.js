const express = require('express')
const controller = require('../controllers/task.controller')
const taskRoutes = express.Router()

taskRoutes.get('/tasks/', controller.get);

module.exports = taskRoutes