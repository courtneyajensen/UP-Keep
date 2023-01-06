const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Fall {
		_id: ID!
		name: String!
	}

	type Spring {
		_id: ID!
		name: String!
	}

	type Summer {
		_id: ID!
		name: String!
	}

	type Winter {
		_id: ID!
		name: String!
	}

	type Query {
		fallTasks: [Fall]
		springTasks: [Spring]
		summerTasks: [Summer]
		winterTasks: [Winter]
	}

	type Mutation {
		createFallTask(task: String!): Fall
		createSummerTask(task: String!): Summer
		createSpringTask(task: String!): Spring
		createWinterTask(task: String!): Winter
	}
`;

module.exports = typeDefs;
