const express = require("express");
const router = expresss.Router();
const performerCtrl = require("../controllers/performersController");

//Get /performers: Returns a list of all performers.
router.get("/", performerCtrl.index);
//Post /Performers: Accepts performer data and creates a new performer
router.post("/", performerCTRL.create);

module.exports = router;
