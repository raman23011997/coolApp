var express = require('express');
var router = express.Router();
var Player =require('../models/Player');
/* GET home page. */
var url =require('url');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express 1' });
});
router.get('/player', function(req, res, next) {
  Player.find((err, player) => {
    if (err) {
      res.render('error');
    } else {
  res.render('player', { 
    title: 'All Players',
      player,  });
  }
});
});



module.exports = router;
