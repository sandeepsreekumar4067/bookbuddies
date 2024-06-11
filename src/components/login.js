import "../style/login.css"
import loginImage from "../assets/loginImage.png"
import NavigationBar from "./navigationbar";
import { useState } from "react";
const Login = () => {
    const [email,setEmail] = useState('')
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
                    <input type="text" value={email} onChange={setEmail} placeholder="Email..." />
                    <input type="password" placeholder="Password..."  />
                    <input type="button" value="Login" />
                </div>
            </div>
        </div>
     );
}
 
export default Login;