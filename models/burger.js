var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res);
        });
    },
    insert: function (col, val, cb) {
        orm.insertOne("burger", col, val, function(res){
            cb(res);
        });
    },
    update: function(condition, cb) {
        orm.updateOne("burger ", "devoured = true ", condition, function(res){
            cb(res);
        })
    }
};



module.exports = burger;