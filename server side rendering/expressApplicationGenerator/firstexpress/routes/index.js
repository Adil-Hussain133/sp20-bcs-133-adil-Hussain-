var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("product");
  // res.render('index', { title: 'Express' });
  // res.send("helo dod");
});


router.get('/contectus', function(req, res, next) {
  res.render("contectus");
  // res.render('index', { title: 'Express' });
  // res.send("is bolta ha express app");
});
module.exports = router;


// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
