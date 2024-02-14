const express = require('express')
const controller = require('../controllers/tag.controller')
const tagsRoutes = express.Router()

tagsRoutes.get('/tags/', controller.get);

module.exports = tagsRoutes