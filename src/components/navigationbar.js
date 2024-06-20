import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../style/navigationbar.css";
import AuthContext from "../components/authContext.js";
import { useState,useEffect } from "react";
const NavigationBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [menuActive, setMenuActive] = useState(false);
    const location = useLocation();
    const { isLoggedIn, logout } = useContext(AuthContext);

    // Toggle the expansion of the search input field
    const handleSearchIconClick = () => {
        setIsExpanded(true);
    };

    // Update the input value state
    const handleSearchInput = (e) => {
        setInputValue(e.target.value);
    };

    // Toggle the menu active state
    const handleMenuButtonClick = () => {
        setMenuActive(!menuActive);
    };

    // Reset menuActive state on route change
    useEffect(() => {
        setMenuActive(false);
    }, [location]);

    return (
        <div className="navigation-bar-container">
            <div className="navigationBar-title">
                <h1>BookNest</h1>
            </div>
            <div className={`navbar-components ${menuActive ? "active" : ""}`}>
                <div className="search-area">
                    <FaSearch size={20} className="search-icon" onClick={handleSearchIconClick} />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleSearchInput}
                        className={`searchfield ${isExpanded ? "visible" : ""}`}
                        placeholder={isExpanded ? "Search..." : ""}
                        onBlur={() => { if (inputValue === "") setIsExpanded(false); }}  // Collapse input when it loses focus if empty
                    />
                </div>
                <Link to="/" className="nav-link"><span>Home</span></Link>
                {!isLoggedIn && <Link to="/login" className="nav-link"><span>Login</span></Link>}
                {!isLoggedIn && <Link to="/signup" className="nav-link"><span>Signup</span></Link>}
                {isLoggedIn && <Link to="/profile" className="nav-link"><span>Profile</span></Link>}
                {isLoggedIn &&  <Link className="nav-link"><span onClick={logout} >Logout</span></Link>}
            </div>
            <button className="menu-button" onClick={handleMenuButtonClick}>
                {menuActive ? "Close" : "Menu"}
            </button>
        </div>
    );
};

export default NavigationBar;
