import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import LoginForm from "./components/LoginForm";

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

function App(){
    return (
        <ApolloProvider client={client}>
        <div className="flex w-full h-screen" >
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <LoginForm />
            </div>
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200 ">
                <div className="w-60 h-60 bg-gradient-to-tr from-green-700 to-orange-200 rounded-full animate-spin"></div>
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
            </div>
        </div>
        </ApolloProvider>
    );
}



//const App = () => 
   // <div className="App text-center">
  //      <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-teal-800 to-stone-900 text-white">
   //         <h1 className="flex-col px-10 rounded">Up Keep</h1>
   //         <div className="text-lg">
    //            <button className="mx-10 border-b-2 border-b-white hover:text-sky-400">Login</button>
     //           <button className="mx-10 border-b-2  border-b-white hover:text-sky-400">Sign Up</button>
     //           <button className="mx-10 border-b-2  border-b-white hover:text-sky-400">Dashboard</button>
     //       </div>
      //  </nav>
    //</div>

export default App;
