const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    value: {type: String, required: true},
    author: String,
    favorite: Boolean,
});

module.exports = mongoose.model('Notes', notesSchema);