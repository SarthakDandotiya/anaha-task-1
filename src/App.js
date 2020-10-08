import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Summary />
        </div>
    );
}

export default App;
