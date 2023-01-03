const { Schema, model } = require('mongoose');

const fallSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Fall = model('Fall', fallSchema);

module.exports = Fall;