const express = require("express");
const joi = require("joi");

const router = express.Router();
const addScheme = joi.object({});

router.get("/", function (req, res) {});

module.exports = router;
