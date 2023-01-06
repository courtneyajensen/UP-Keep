const { Schema, model } = require("mongoose");

const summerSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
});

const Summer = model("Summer", summerSchema);

module.exports = Summer;
