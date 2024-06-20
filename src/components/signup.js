import "../style/signup.css"
import loginImage from "../assets/loginImage.png"
import NavigationBar from "./navigationbar";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { auth } from "./firebaseconfig";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
const Signup = () => {
    const [passVisibility,setpassVisibility] = useState(false)
    const [password,setPassword] = useState('')//contains the password of the user
    const [confirmPassword,setconfirmPassword] = useState('')//for confirming the password of the user 
    const [confirmPasswordVisibility,setConfirmPasswordVisibility] = useState(false)
    const [email,setEmail] = useState("")//contains the email of the user
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
    const handlePasswordConfirmation = async() =>{
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
        } 
        else {
            //all conditions passed proceed to make the user 
            try{
                const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
                const user = userCredentials.user
                await sendEmailVerification(user)
                alert("Verification email sent! Please check your inbox.");
                console.log("Success");
                console.log(user);
                navigate("/login")
            }catch(err){
                console.log("Error");
                alert(err.message);
            }
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
                                <FaEye className="icon" size={20} onClick={
                                    ()=>{
                                        setpassVisibility(!passVisibility)
                                    }
                                }/>
                            ):(
                                <FaEyeSlash className="icon" size={20} onClick={
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
                                <FaEye className="icon" size={20} onClick={
                                    ()=>{
                                        setConfirmPasswordVisibility(!confirmPasswordVisibility)
                                    }
                                }/>
                            ):(
                                <FaEyeSlash className="icon" size={20} onClick={
                                    ()=>{
                                        setConfirmPasswordVisibility(!confirmPasswordVisibility)
                                    }
                                }/>
                            )
                        }                      
                    </div>
                    <input type="button" value="Signup" onClick={
                        ()=>{
                            handlePasswordConfirmation()
                        }
                    } />
                </div>
            </div>
        </div>
     );
}
 
export default Signup;