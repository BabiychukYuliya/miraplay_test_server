const express = require("express");

const ctrl = require("../controllers/auth");

const { validateBody } = require("../middlewares");

const { authSchema } = require("../models/user");

const router = express.Router();

router.post("/register", validateBody(authSchema), ctrl.register);

router.post("/login", validateBody(authSchema), ctrl.login);
module.exports = router;
