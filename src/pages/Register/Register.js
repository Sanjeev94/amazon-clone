import React,{useState} from 'react';
import "./Register.css";
import {Link} from "react-router-dom";
import AmazonLogo from "../../Amazon_Logo.png";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const register = e => {
        e.preventDefault();
    };

    return (
        <div className="register">
            <Link to="/">
            <img src={AmazonLogo} className="register-logo" alt="logo" />
            </Link>
            <div className="register-container">
                <h1>Create Account</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={register} className="continue">
                        Continue
                    </button>
                    <div className="detail">
                        <p>Already Have an Account ?</p>
                        <Link to="/login" className="signIn-link">
                            <p>Sign In</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
