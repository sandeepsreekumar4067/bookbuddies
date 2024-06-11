import "../style/login.css"
import loginImage from "../assets/loginImage.png"
import NavigationBar from "./navigationbar";
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useLocation,useNavigate } from "react-router-dom";
const Login = () => {
    const locaiton = useLocation()
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordVisibility,setPasswordVisibility] = useState(false)
    const handlePasswordInput = (e) =>{
        setPassword(e.target.value)
    }
    const handleEmailInput = (e)=>{
        setEmail(e.target.value)
    }
    const emailchecking = (mail) =>{
        const mailPart = email.split("@")
        if(mail.length===0){
            alert("Enter your Email First")
        }else if(!(mail.includes("@"))){
            alert("Enter a Valid Email")
        }else if (mailPart.length !== 2 || mailPart[1].length === 0) {
            alert("You must enter a valid email");
        }else if(password.length===0){
            alert("Please enter your password")
        }else{
            alert("Success")
            navigate("/home")
        }
    }
    return ( 
        <div className="login-container">
            <NavigationBar/>
            <div className="login-components">
                <div className="image-container">
                    <img src={loginImage} alt="" />
                    <div className="gradient">
                        <h1>Login</h1>
                        <h2>Welcome Back</h2>
                    </div>
                </div>
                <div className="login-input-container">
                    <input type="text" value={email} onChange={handleEmailInput} placeholder="Email..." />
                    <div className="wrapper">
                    <input type={`${passwordVisibility?"text":"password"}`} placeholder="Password..." value={password} onChange={handlePasswordInput} />
                    {
                        passwordVisibility?(
                            <FaEye size={20} onClick={
                                ()=>{
                                    setPasswordVisibility(!passwordVisibility)
                                }
                            }/>
                        ):( 
                            <FaEyeSlash size={20} onClick={
                                ()=>{
                                    setPasswordVisibility(!passwordVisibility)
                                }
                            }/>
                        )
                    }
                    </div>
                    <input type="button" value="Login" onClick={
                        ()=>{
                            emailchecking(email)
                        }
                    }/>
                </div>
            </div>
        </div>
     );
}
 
export default Login;