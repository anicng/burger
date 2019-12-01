var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res);
        });
    }
};





module.exports = burger;