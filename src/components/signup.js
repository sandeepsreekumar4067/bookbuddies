import "../style/signup.css"
import loginImage from "../assets/loginImage.png"
import NavigationBar from "./navigationbar";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useLocation,useNavigate } from "react-router-dom";
const Signup = () => {
    const [passVisibility,setpassVisibility] = useState(false)
    const [password,setPassword] = useState('')
    const [confirmPassword,setconfirmPassword] = useState('')
    const [confirmPasswordVisibility,setConfirmPasswordVisibility] = useState(false)
    const [email,setEmail] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    const handleEmailEntry = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordEntry = (e) =>{
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) =>{
        setconfirmPassword(e.target.value)
    }
    const handlePasswordConfirmation = (pass1,pass2) =>{
        const emailParts = email.split("@")
        if (email.length===0){
            alert("Enter an email")
        }
        else if (!(email.includes("@"))){
            alert("Enter a valid email")
        }
        else if (emailParts.length !== 2 || emailParts[1].length === 0) {
            alert("You must enter a valid email");
        }else if (password.length === 0) {
            alert("You must enter a password");
        } else if (confirmPassword.length === 0) {
            alert("You must confirm the password");
        } else if (password !== confirmPassword) {
            alert("Entered passwords don't match");
        } else {
            alert("Success! Welcome to the family");
            navigate("/home");
        }
    }
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
                    <input type="email" placeholder="Enter the email" value={email} onChange={handleEmailEntry} />
                    <div className="wrapper">
                        <input type={`${passVisibility?"text":"password"}`} placeholder="password.." value={password} onChange={handlePasswordEntry} />     
                        {
                            passVisibility?(
                                <FaEye size={20} onClick={
                                    ()=>{
                                        setpassVisibility(!passVisibility)
                                    }
                                }/>
                            ):(
                                <FaEyeSlash size={20} onClick={
                                    ()=>{
                                        setpassVisibility(!passVisibility)
                                    }
                                }/>
                            )
                        }                   
                    </div>
                    <div className="wrapper">
                        <input type={`${confirmPasswordVisibility?"text":"password"}`} placeholder="Confirm the password.." value={confirmPassword} onChange={handleConfirmPassword} />     
                        {
                            confirmPasswordVisibility?(
                                <FaEye size={20} onClick={
                                    ()=>{
                                        setConfirmPasswordVisibility(!confirmPasswordVisibility)
                                    }
                                }/>
                            ):(
                                <FaEyeSlash size={20} onClick={
                                    ()=>{
                                        setConfirmPasswordVisibility(!confirmPasswordVisibility)
                                    }
                                }/>
                            )
                        }                      
                    </div>
                    <input type="button" value="Signup" onClick={
                        ()=>{
                            handlePasswordConfirmation(password,confirmPassword)
                        }
                    } />
                </div>
            </div>
        </div>
     );
}
 
export default Signup;