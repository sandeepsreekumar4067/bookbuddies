import "../style/login.css"
import loginImage from "../assets/loginImage.png"
import NavigationBar from "./navigationbar";
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useLocation,useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseconfig";
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
    const emailchecking = async (mail) =>{
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
            //if all conditions pass
            try{
                const userCredentials = await signInWithEmailAndPassword(auth,email,password)
                alert("Welcome Back")
                navigate("/home")
            }catch(err){
                const errorCode = err.code;
                const errorMessage = err.message;
                const match = errorMessage.match(/\(([^)]+)\)/);
                var formattedErrorMessage = match ? match[1] : errorMessage;
                if (formattedErrorMessage.startsWith('auth/')) {
                    formattedErrorMessage = formattedErrorMessage.replace('auth/', '');
                }
                console.log(errorCode, formattedErrorMessage);
                alert(formattedErrorMessage); 
            }         
        }
    }
    const handlePasswordReset = async(mail) =>{
        const mailPart = email.split("@")
        if(mail.length===0){
            alert("Enter your Email First")
        }else if(!(mail.includes("@"))){
            alert("Enter a Valid Email")
        }else if (mailPart.length !== 2 || mailPart[1].length === 0) {
            alert("You must enter a valid email");
        }else{
            //allconditions passed
            try{
                await sendPasswordResetEmail(auth,email)
                .then(()=>{
                    alert("a password recovery email has been send to your account")
                })
            }catch(err){
                const errorCode = err.code;
                const errorMessage = err.message;
                const match = errorMessage.match(/\(([^)]+)\)/);
                var formattedErrorMessage = match ? match[1] : errorMessage;
                if (formattedErrorMessage.startsWith('auth/')) {
                    formattedErrorMessage = formattedErrorMessage.replace('auth/', '');
                }
                console.log(errorCode, formattedErrorMessage);
                alert(formattedErrorMessage); 
            }
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
                            <FaEye size={20} className="icon" onClick={
                                ()=>{
                                    setPasswordVisibility(!passwordVisibility)
                                }
                            }/>
                        ):( 
                            <FaEyeSlash className="icon" size={20} onClick={
                                ()=>{
                                    setPasswordVisibility(!passwordVisibility)
                                }
                            }/>
                        )
                    }
                    </div>
                    <a className="reset-link" onClick={()=>{
                        handlePasswordReset(email)
                    }}>forgot password..?</a>
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