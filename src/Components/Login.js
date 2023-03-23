import React from 'react'
import { Link } from 'react-router-dom';
import "../Assets/css/Login.css"

const Login = () => {
  return (
    <div className="login">

        
            
                <img className="login__logo" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart"/>
           

            <div className="login__container">
                <h1>Login</h1>
                <form>
                    <h5>E-mail</h5>
                    {/* e.target.value = whatever user type in email */}
                    <input type="text" placeholder="enter your email..."/>

                    <h5>Password</h5>
                    <input type="password" placeholder="enter your password..." />

                    <button type="submit"  className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to FLIPKART FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <button className="login__registerButton">Create your Flipkart Account</button>
            </div>
        </div>
  )
}

export default Login
