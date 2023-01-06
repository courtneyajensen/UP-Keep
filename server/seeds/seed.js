const db = require("../config/connection");
const { Fall } = require("../models");
const { Spring } = require("../models");
const { Summer } = require("../models");
const { Winter } = require("../models");

const springData = require("./springData.json");
const fallData = require("./fallData.json");
const summerData = require("./summerData.json");
const winterData = require("./winterData.json");

db.once("open", async () => {
	await Fall.deleteMany();
	await Spring.deleteMany();
	await Summer.deleteMany();
	await Winter.deleteMany();

	const fall = await Fall.insertMany(fallData);
	const spring = await Spring.insertMany(springData);
	const summer = await Summer.insertMany(summerData);
	const winter = await Winter.insertMany(winterData);

	console.log("Seasons seeded!");
	process.exit(0);
});
