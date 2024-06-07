import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../style/navigationbar.css";

const NavigationBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [inputValue,setInputValue] = useState("Search...")
    const handleSearchIconClick = () => {
        setIsExpanded(true);
    };
    const handleSearchInput = (e)=>{
        setInputValue(e.target.value)
    }
    return ( 
        <div className="navigation-bar-container">
            <div className="navigationBar-title">
                <h1>BookNest</h1>
            </div>
            <div className="navbar-components">
                <div className="search-area">
                  <FaSearch onClick={handleSearchIconClick}/>
                  <input onChange={handleSearchInput} type="text" value={inputValue} placeholder={isExpanded?"Search..":""} className={`searchfield ${isExpanded?"visible":""} `} />
                </div>
                <span>Home</span>
                <span>Login</span>
                <span>Signup</span>
            </div>
        </div>
    );
}
 
export default NavigationBar;
