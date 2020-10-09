import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Tab from "./components/Tab";
import Tabs from "./components/Tabs";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Summary />
            <Tabs />
            <Tab />
        </div>
    );
}

export default App;
