var mysql = require("mysql");
////angular blog testing
// var pool = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.DB_HOST,
//     user: "bloguser",
//     password: process.env.DB_PASSWORD,
//     database: "AngularBlog"
// });

//our aws db
var pool = mysql.createPool({
    connectionLimit: 20,
    host: "hairdo.cvmqkxdkzggt.us-east-2.rds.amazonaws.com",
    user: "ChrisTaylorRay",
    password: "password",
    database: "HairDo"
});

exports.pool = pool;

exports.row = function(procedure, values) {
    return callProcedure(procedure, values).then(function(data) {
        return data[0][0];
    })
}

exports.rows = function(procedure, values) {
    return callProcedure(procedure, values).then(function(data) {
        return data[0];
    })
}

exports.empty = function(procedure, values) {
    return callProcedure(procedure, values).then(function() {
        return;
    });
}

function callProcedure(procedure, values) {
    return new Promise(function(fulfill, reject) {
        pool.getConnection(function(err, connection) {
            if(err) {
                reject(err);
            } else {
                pool.query(createQueryString(procedure, values),
                 values, function(err, results) {
                     connection.release();
                    if(err) {
                        reject(err);
                    } else {
                        fulfill(results);
                    }
                })
            }
        })
    });
}

function createQueryString(procedure, values) {
    var query = 'CALL ' + procedure + "(";
    for(var i = 0; i < values.length; i++) {
        query += (i >= values.length - 1 ? "?" : "?,");
    }
    return query += ")";
}