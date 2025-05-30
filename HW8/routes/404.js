const express = require("express");
const router = express.Router();
const error404Controller = require("../controllers/404");
router.all("*",error404Controller.getError404);

module.exports= router;