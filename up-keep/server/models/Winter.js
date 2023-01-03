const { Schema, model } = require('mongoose');

const winterSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Winter = model('Winter', winterSchema);

module.exports = Winter;