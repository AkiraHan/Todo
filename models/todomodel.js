var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    user: String,
    todo: String,
    isDone: Boolean,
    attachMent: Boolean
});

var Todos = mongoose.model('Todos', TodoSchema);

module.exports = Todos;
