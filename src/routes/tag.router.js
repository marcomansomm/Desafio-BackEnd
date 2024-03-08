const express = require('express')
const controller = require('../controllers/tag.controller')
const tagRoutes = express.Router()

tagRoutes.get('/tags/', controller.get);

tagRoutes.get('/tags/:id', controller.findById);

tagRoutes.post('/tags/', controller.post);

tagRoutes.put('/tags/:id', controller.put);

tagRoutes.delete('/tags/:id', controller.delete);

module.exports = tagRoutes