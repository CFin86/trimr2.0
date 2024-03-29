// var db = require("../config/db.js");

// exports.all = function() {
//     return db.rows("GetAllUsers", []);
// }
// exports.allStylists = function() {
//     return db.rows("GetAllStylists", []);
// }

// exports.GetUserByEmail = function(email, password) {
//     return db.row('GetUserByEmail', [email, password]);
// }

// exports.read = function(id) {
// 	return db.row('GetSingleUser', [id]);
// }

// exports.write = function(first, last, email, password) {
//     return db.row("CreateUser", [first, last, email, password]);
// }

// exports.updateEmail = function(id, email) {
//     return db.empty("UpdateEmail", [id, email]);
// }

// exports.updatePassword = function(id, password) {
//     return db.empty("UpdatePassword", [id, password])
// }

// exports.delete = function(id) {
//     return db.empty("DeleteUser", [id]);
// }
var db = require("../config/db.js");


exports.all = function() {
    return db.rows("GetAllUsers", []);
}

exports.GetUserByEmail = function(email) {
    return db.row('GetUserByEmail', [email]);
}

exports.read = function(id) {
	return db.row('GetSingleUser', [id]);
}

exports.create = function(email, hash, zip) {
    return db.row('InsertUser', [email, hash, zip]);
}

exports.updateEmail = function(id, email) {
    return db.empty("UpdateEmail", [id, email]);
}

exports.updatePassword = function(id, password) {
    return db.empty("UpdatePassword", [id, password])
}

exports.delete = function(id) {
    return db.empty("DeleteUser", [id]);
}