import { useState } from "react";
import "../style/profile.css"
import { run } from "./GeminiModel";
//run module was imported from my custom tuned gemini model . you can find more about it in the documentation page of gemini
const Profile = () => {
    const [question,setQuestion] = useState('')
    const handleQuestion = (e) =>{
        setQuestion(e.target.value)
    }
    const handleSubmission = async()=>{
        const resp = await run(question)
    }
    return ( 
        <div className="profile-container">
            <div className="profile-title">
                Welcome Sandeep Sreekumar
            </div>
            <div className="profile-section">
                <div className="bookAdd-section">
                    <input type="text" placeholder="ask the question :" onChange={handleQuestion} value={question}/>
                    <input type="number" placeholder="Enter the Price of the Book" />
                    <textarea name="" id="" placeholder="Contact details"/>
                    <input type="button" value="Submit" onClick={handleSubmission}/>
                </div>
                <div className="bookView-section">

                </div>
            </div>
        </div>
     );
}
 
export default Profile;