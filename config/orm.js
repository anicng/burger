var connection = require('./connection.js');

var orm = {
    selectAll: function (tablename, cb) {
        var queryString = "SELECT * FROM " + tablename + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function () {

    },

    updateOne: function () {

    }
}