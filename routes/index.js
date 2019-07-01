var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('--------');
  console.log(req);
  
  // res.render('index', { title: 'Express' });
  res.json({
    wwj: 'hl'
  })
});

module.exports = router;
