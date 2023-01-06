const { Schema, model } = require("mongoose");

const springSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
});

const Spring = model("Spring", springSchema);

module.exports = Spring;
