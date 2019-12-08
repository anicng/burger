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
        var handlebarsObject = {
            burger: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});

router.post("/api/burger", function (req, res) {
    console.log("req.body.newBurgerName: " + req.body.newBurgerName);

    burger.insert(
        ["burger_name"],
        [req.body.newBurgerName],
        function (data) {
            console.log("Data:" + data);
            res.json(data);
        });
});

module.exports = router;