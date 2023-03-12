import React from "react";
import "./Header.css";

const Header = ({ title, isExpanded }) => {
    return (
        <div className="header-container">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt="Name-It"
                className={`header-img ${
                    isExpanded ? "header-img-expanded" : "header-img-contracted"
                }`}
            />
            <h1
                className={`header-text ${
                    isExpanded
                        ? "header-text-expanded"
                        : "header-text-contracted"
                }`}
            >
                {title}
            </h1>
        </div>
    );
};

export default Header;
