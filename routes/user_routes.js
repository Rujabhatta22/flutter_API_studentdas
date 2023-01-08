const express =  require("express")

const User = require("../models/User")
const router =  express.Router()
const usercontroller =  require("../controllers/user_controller")

router.route("/register")
.post(usercontroller.registeruser)

router.route("/login")
.post(usercontroller.loginuser)

module.exports =  router