var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var file = path.join(__dirname, '..models/animals.json');
fs.readFile('file', 'utf8', function(err, data) {
  if (err) {
    next(err);
  } else {
    var obj = JSON.parse(data);
    var animal = obj;

    obj.forEach(function (elem) {
      if (elem.id == id) {
        animal = elem;
      }
    });
    res.json(animal);
  }
})
});

module.exports = router;
