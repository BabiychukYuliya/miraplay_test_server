const express = require("express");

const { validateBody } = require("../middlewares");

const { authSchema } = require("../models/user");

const router = express.Router();

router.post("/register", validateBody(authSchema));

module.exports = router;
