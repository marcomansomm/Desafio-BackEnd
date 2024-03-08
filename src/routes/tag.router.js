const express = require('express')
const controller = require('../controllers/tag.controller')
const tagsRoutes = express.Router()

tagsRoutes.get('/tags/', controller.get);
tagsRoutes.post('/tags/', controller.create);
tagsRoutes.put('/tags/:id', controller.update);
tagsRoutes.delete('/tags/:id', controller.delete);

module.exports = tagsRoutes