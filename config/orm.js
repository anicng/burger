var connection = require('./connection.js');

var orm = {
    selectAll: function (tablename, cb) {
        var queryString = "SELECT * FROM " + tablename + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (tablename, col, vals, cb) {
        var queryString = "INSERT INTO " + tablename;
        queryString += "(";
        queryString += col.toString();
        queryString += ") VALUES ('";
        queryString += vals.toString();
        queryString += "');"
        console.log("query: " + queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (tablename, val, condition, cb) {
        var queryString = "UPDATE " + tablename;
        queryString += "SET " + val;
        queryString += "WHERE " + condition;

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;