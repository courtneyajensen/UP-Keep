import React from "react";
import List from "../components/List";
import Category from "../components/Category";
const Dashboard = () => {
	return (
		<div className="container">
			<Category />
			<List />
		</div>
	);
};

export default Dashboard;
