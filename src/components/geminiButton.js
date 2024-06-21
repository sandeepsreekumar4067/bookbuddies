import "../style/GeminiButton.css";
import ai from "../assets/ai2.png";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
const GeminiButton = () => {
    const [clicked, setClicked] = useState(false);
    const [inputValues, setInputValues] = useState([]);
    const [currentInput, setCurrentInput] = useState("");

    const handleButtonclick = () => {
        setClicked(!clicked);
    };

    const handleInputChange = (event) => {
        setCurrentInput(event.target.value);
    };

    const handleArrowButtonClick = () => {
        if (currentInput.trim() !== "") {
            setInputValues([...inputValues, currentInput]);
            setCurrentInput("");
        }
        console.log(inputValues);
    };

    return ( 
        <div className={`gemini-container ${clicked ? 'clicked' : ''}`}>
            {
                !clicked ? (
                    <div className="image" onClick={handleButtonclick}>
                        <img src={ai} alt="" />
                    </div>
                ) : (
                    <div className="ai-bot-container">
                        <div className="closeButton-container">
                            <IoMdClose size={25} onClick={handleButtonclick}/>
                        </div>
                        <div className="chat-container">
                            {/* Display stored input values */}
                            {inputValues.map((value, index) => (
                                <div className="userChat" key={index}>{value}</div>
                            ))}
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                placeholder="Ask Questions"
                                value={currentInput}
                                onChange={handleInputChange}
                            />
                            <CiLocationArrow1 color="black" onClick={handleArrowButtonClick}/>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default GeminiButton;
