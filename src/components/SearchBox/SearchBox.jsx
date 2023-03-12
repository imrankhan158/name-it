import React from "react";
import "./SearchBox.css";

const SearchBox = ({ handleOnSearch }) => {
    return (
        <div className="search-box">
            <input
                placeholder="Type Keyword"
                className="search-input"
                onChange={(event) => handleOnSearch(event.target.value)}
            />
        </div>
    );
};

export default SearchBox;
