const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aAndBSchema = new Schema({});


module.exports = mongoose.model('brand',aAndBSchema,'brands')