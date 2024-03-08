const express = require("express")
const routes = express.Router()

const taskRoutes = require("./task.router");
const tagRoutes = require("./tag.router");

const routesList = {
    taskRoutes,
    tagRoutes
};

for(const router in routesList) {
    routes.use(routesList[router]);
}

module.exports = routes