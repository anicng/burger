var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();


// json list of burger in database
router.get("/api/burger", function (req, res) {
    burger.all(function (data) {
        res.json(data);
    });
});

router.get("/index", function (req, res) {
    burger.all(function (data) {
        res.render("index");
    });
});

module.exports = router;