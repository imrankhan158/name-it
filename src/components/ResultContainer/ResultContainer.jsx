import React from "react";
import NameCard from "../NameCard/NameCard";

import "./ResultContainer.css";

const ResultContainer = ({ suggestedNames }) => {
    return (
        <div className="result-container">
            {suggestedNames.map((name, index) => {
                return <NameCard key={index} suggestedName={name} />;
            })}
        </div>
    );
};

export default ResultContainer;
