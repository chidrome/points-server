const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
    program: {
        type: String,
        minlength: 1,
        maxlength: 99
    },
    current_month: {
        type: String,
        minlength: 1,
        maxlength: 99
    }
});

module.exports = mongoose.model('Program', ProgramSchema);