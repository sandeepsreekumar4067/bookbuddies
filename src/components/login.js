import "../style/login.css"
import loginImage from "../assets/loginImage.png"
import NavigationBar from "./navigationbar";
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordVisibility,setPasswordVisibility] = useState(false)
    const handlePasswordInput = (e) =>{
        setPassword(e.target.value)
    }
    const handleEmailInput = (e)=>{
        setEmail(e.target.value)
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
                    <input type="password" placeholder="Password..." value={password} onChange={handlePasswordInput} />
                    {
                        passwordVisibility?(
                            ''
                        ):('')
                    }
                    </div>
                    <input type="button" value="Login" />
                </div>
            </div>
        </div>
     );
}
 
export default Login;