import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
	uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className="App text-center">
					<StoreProvider>
						<nav className="flex justify-between items-center p-5 bg-gradient-to-r from-teal-800 to-stone-900 text-white">
							<Nav />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/login" element={<Login />} />
								<Route path="/signup" element={<Signup />} />
								<h1 className="flex-col px-10 rounded">Up Keep</h1>
								<div className="text-lg">
									<button className="mx-10 border-b-2 border-b-white hover:text-sky-400">
										Login
									</button>
									<button className="mx-10 border-b-2  border-b-white hover:text-sky-400">
										Sign Up
									</button>
									<button className="mx-10 border-b-2  border-b-white hover:text-sky-400">
										Dashboard
									</button>
								</div>
							</Routes>
						</nav>
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
