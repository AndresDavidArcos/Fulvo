const {loginVerification, register} = require("../controllers/login");

const express = require("express");
const app = express();

app.post("/register", register);
app.post("/login", loginVerification);

module.exports = app;