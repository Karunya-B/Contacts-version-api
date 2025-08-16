const express = require("express");
const { registerUser, currentuser,loginuser } = require("../controllers/userController");
const validateTokenHandler = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginuser);

router.get("/current",validateTokenHandler, currentuser);

module.exports = router;