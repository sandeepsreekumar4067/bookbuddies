import "../style/signup.css"
import loginImage from "../assets/loginImage.png"
import NavigationBar from "./navigationbar";
import { useState } from "react";
const Signup = () => {
    const [values,setValues] = useState(
        {
            value:"",
            setpasswordVisibility:false,
        }
    )
    
    return ( 
        <div className="signup-container">
             <NavigationBar/>
            <div className="signup-components">
                <div className="image-container">
                    <img src={loginImage} alt="" />
                    <div className="gradient">
                        <h1>Signup</h1>
                        <h2>Welcome to Family</h2>
                    </div>
                </div>
                <div className="signup-input-container">
                    <input type="email" placeholder="Enter the email" />
                    <input type="password" placeholder="Password"  />
                    <input type="password" placeholder="confirm the password"  />
                    <input type="button" value="Signup" />
                </div>
            </div>
        </div>
     );
}
 
export default Signup;