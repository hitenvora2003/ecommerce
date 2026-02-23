var express = require("express");
var router = express.Router();

const mainController = require("../controller/maincontroller");
const mw = require("../middelware/auth");

// Single Aggregator Route
router.get("/all-data", mw.authCheck, mainController.getAllData);

module.exports = router;