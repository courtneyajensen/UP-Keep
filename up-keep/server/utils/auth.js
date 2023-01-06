const jwt = require("jsonwebtoken");

const secret = "mysecret";
const expiration = "2h";

module.exports = {
	authMiddleware: function ({ req }) {
		let token = req.body.token || req.query.token || req.headers.authorization;

		if (!token) {
			return req;
		}

		try {
			const { data } = jwt.verify(token, secret, { maxAge: expiration });
			req.user = data;
		} catch {
			console.log("Invalid token");
		}

		return req;
		0;
	},
	signToken: function ({ firstName, email, _id }) {
		const payload = { firstName, email, _id };

		return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
	},
};
