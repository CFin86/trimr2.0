var express = require("express");
var passport = require("passport");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
var LocalStrategy = require('passport-local').Strategy;
var userProc = require('../procedures/users.proc.js');
var utils = require("./utils.js");
var pool = require('./db').pool;

function configurePassport(app) {
     passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function (email, password, done) {
        userProc.GetUserByEmail(email).then(function (user) {
            if (!user) {
                return done(null, false);
            }
            utils.checkPassword(password, user.password)
                .then(function (matches) {
                    if (matches) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: "Nope!" });
                    }
                }, function (err) {
                    return done(err);
                })
        }, function (err) {
            return done(err);
        });
    }));
// //for angular blog
//     passport.serializeUser(function (user, done) {
//         done(null, user.id);
//     });
//for trimr
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (user, done) {
        userProc.read(user).then(function (user) {
            done(null, user);
        }, function (err) {
            done(err);
        });
    });

    var sessionsStore = new MySQLStore({
        createDatabaseTable: true
    }, pool);
    app.use(session({
        secret: "gdsjhfskjh6754",
        store: sessionsStore,
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = configurePassport;