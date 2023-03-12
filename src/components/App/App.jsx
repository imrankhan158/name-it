import React, { useState } from "react";
import Header from "../Header/Header";
import ResultContainer from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

// Fuction based component
const App = () => {
    const headerTitle = "Name It!";
    const [isExpanded, setIsExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);
    const handleOnSearch = (text) => {
        setIsExpanded(() => !text);
        if (text) {
            setSuggestedNames(name(text));
        } else {
            setSuggestedNames([]);
        }
    };
    return (
        <div>
            <Header title={headerTitle} isExpanded={isExpanded} />
            <SearchBox handleOnSearch={handleOnSearch} />
            <ResultContainer suggestedNames={suggestedNames} />
        </div>
    );
};

export default App;
