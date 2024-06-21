import "../style/GeminiButton.css";
import ai from "../assets/ai2.png";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import { run } from "./GeminiModel";
const GeminiButton = () => {
    const [clicked, setClicked] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [currentInput, setCurrentInput] = useState("");

    const handleButtonclick = () => {
        setClicked(!clicked);
    };

    const handleInputChange = (event) => {
        setCurrentInput(event.target.value);
    };

    const handleArrowButtonClick = async () => {
        setCurrentInput("")
        if (currentInput.trim() !== "") {
            // Add user input to chatMessages
            setChatMessages(prevMessages => [
                ...prevMessages,
                { text: currentInput, userInput: true }
            ]);
            
            // Simulate AI response (replace with your actual AI logic)
            const aiResponse = await run(currentInput); // Assuming run is your AI function
            // Add AI response to chatMessages
            setChatMessages(prevMessages => [
                ...prevMessages,
                { text: aiResponse, userInput: false }
            ]);
        }
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
                            {chatMessages.map((message, index) => (
                                <div key={index} className={message.userInput ? "userChat" : "aiChat"}>
                                    {message.text}
                                </div>
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
