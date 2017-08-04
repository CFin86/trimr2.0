var express = require('express');
var usersCtrl = require("./controllers/users.ctrl");
var contact = require('./controllers/email.ctrl');
var donations = require('./controllers/donations.ctrl');
// var prerender = require('prerender-node');
var router = express.Router();


router.use('/users', usersCtrl);
router.use('/contact', contact);
router.use('/donations', donations);
// app.use(prerender);
module.exports = router;