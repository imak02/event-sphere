const express = require("express");
const { register } = require("../handlers/userHandler");

const router = express.Router();

router.post("/register", register);

module.exports = router;
