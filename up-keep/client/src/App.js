import React from 'react';
import './index.css';

const App = () => 
    <div className="App text-center">
        <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-teal-800 to-stone-900 text-white">
            <h1 className="px-10 rounded">Up Keep</h1>
            <div className="text-lg">
                <button className="mx-10">Login</button>
                <button className="mx-10">Sign Up</button>
                <button className="mx-10">Dashboard</button>
            </div>
        </nav>
    </div>

export default App;
