import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../style/navigationbar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [menuActive, setMenuActive] = useState(false);

    const handleSearchIconClick = () => {
        setIsExpanded(true);
    };

    const handleSearchInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleMenuButtonClick = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="navigation-bar-container">
            <div className="navigationBar-title">
                <h1>BookNest</h1>
            </div>
            <div className={`navbar-components ${menuActive ? "active" : ""}`}>
                <div className="search-area">
                    <FaSearch className="search-icon" onClick={handleSearchIconClick} />
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
                <Link to="/login" className="nav-link"><span>Login</span></Link>
                <Link to="/signup" className="nav-link"><span>Signup</span></Link>
            </div>
            <button className="menu-button" onClick={handleMenuButtonClick}>
                {
                    menuActive?"Close":"Menu"
                }
            </button>
        </div>
    );
};

export default NavigationBar;
