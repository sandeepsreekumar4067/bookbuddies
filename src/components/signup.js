import "../style/signup.css"
const Signup = () => {
    return ( 
        <div className="signup-container">
             <NavigationBar/>
            <div className="signup-components">
                <div className="image-container">
                    <img src={loginImage} alt="" />
                    <div className="gradient">
                        <h1>Login</h1>
                        <h2>Welcome Back</h2>
                    </div>
                </div>
                <div className="signup-input-container">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password"  />
                    <input type="button" value="Login" />
                </div>
            </div>
        </div>
     );
}
 
export default Signup;