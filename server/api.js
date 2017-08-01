var express = require('express');
var purchaseCtrl = require("./controllers/purchases.ctrl");
var usersCtrl = require("./controllers/users.ctrl");
var contact = require('./controllers/email.ctrl');
var donations = require('./controllers/donations.ctrl');
// var prerender = require('prerender-node');
var router = express.Router();


router.use('/users', usersCtrl);
router.use('/purchases', purchaseCtrl);

router.use('/contact', contact);
router.use('/donations', donations);
// app.use(prerender);
module.exports = router;