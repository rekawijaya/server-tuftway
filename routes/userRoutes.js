const routes    = require("express").Router()
global.response = require("../response/response")
global.query    = require("../models/query")
const userController      = require("../controllers/userControllers")

routes.post("/register", userController.Register)
routes.post("/login", userController.login)

module.exports = routes