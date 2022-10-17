const {loginVerification, register} = require("../controllers/login");

const express = require("express");
const router = express.Router();

router.post("/register", register);
router.post("/login", loginVerification);

module.exports = router;