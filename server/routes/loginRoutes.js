const express = require("express")
const router = express.Router();
const loginControllers = require("../controllers/loginController")

router.get("/", (req,res) =>{
    res.send("<h1>Landing Page </h1>")
})
// router.get("/login")
router.post("/login", loginControllers.loginUser)

// router.get("/register")
router.post("/register", loginControllers.registerUser)

router.get("/dashboard", (req,res) =>{
    res.send("<h1>Dashboard </h1>")
})

module.exports = router;