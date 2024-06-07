import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../style/navigationbar.css";

const NavigationBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSearchIconClick = () => {
        setIsExpanded(!isExpanded);
    };

    return ( 
        <div className="navigation-bar-container">
            <div className="navigationBar-title">
                <h1>BookNest</h1>
            </div>
            <div className="navbar-components">
                <div className="search-area">
                  {
                    isExpanded?(
                        <input
                        type="text"
                        className={`search-input ${isExpanded ? 'expand' : ''}`}
                        placeholder="Search..."
                    />
                    ):(
                        <FaSearch
                        className="search-icon"
                        onClick={handleSearchIconClick}
                    />
                    )
                  }
                </div>
                <span>Home</span>
                <span>Login</span>
                <span>Signup</span>
            </div>
        </div>
    );
}
 
export default NavigationBar;
