var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

// json list of burger in database
router.get('/api/burger', function(req, res) {
  burger.all(function(data) {
    res.json(data);
  });
});

router.get('/', function(req, res) {
  burger.all(function(data) {
    var handlebarsObject = {
      burger: data
    };
    console.log(handlebarsObject);
    res.render('index', handlebarsObject);
  });
});

router.post('/api/burger', function(req, res) {
  console.log(req);
  burger.insert(['name', 'devoured'], [req.body.name, 'false'], function(data) {
    console.log(data);
    res.json({
      id: data.insertID
    });
  });
});

module.exports = router;
