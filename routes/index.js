var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home',page:'home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{   res.render('index', {title: 'Home',page:'home'}); });

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('contents/about', { title: 'About',page:'about us'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('contents/projects', { title: 'projects',page:'projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('contents/services', { title: 'Services',page:'services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contents/contacts', { title: 'Contact',page:'contacts'});
});

module.exports = router;
