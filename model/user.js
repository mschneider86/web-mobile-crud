'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  gender: { type: String }
});


UserSchema.statics = {

    get: function(query, callback) {
        this.findOne(query, callback);
    },

    getAll: function(query, callback) {
        this.find(query, callback);
    },

    getAllCount: function(query, callback) {
        this.count(query, callback);
    },

    updateById: function(id, updateData, callback) {
        this.update(id, {$set: updateData}, callback);
    },
    removeById: function(removeData, callback) {
        this.remove(removeData, callback);
    },
    create: function(data, callback) {
        var user = new this(data);
        user.save(callback);
    }
}

var user = mongoose.model('user', UserSchema);

module.exports = {
    User: user
};
