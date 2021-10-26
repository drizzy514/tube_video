import {  useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
function Login () {


    const fileImage = useRef()
    const userName = useRef()
    const userEmail = useRef()
    return (
                <>
                    <div className="login">
                        <div>

                        <div className="login__box">
                            <h1 className="login__title">Login Bro</h1>
                            <form action="/login"  className="login__form" method="post" >
                            <input type="text" ref={userName}  className="login__input" placeholder="your name"
                                onChange={
                                    function (e) {
                                        return window.localStorage.setItem("token", e.target.value)
                                    }
                                }
                            />
                            <input type="text" className="login__input" ref={userEmail} placeholder="your email"
                            onChange={
                                function (e) {
                                    return window.localStorage.setItem("userinput", e.target.value)
                                }
                            }
                            />
                            <input  id="fileimg" type="file" name="avatar"  ref={fileImage}/>
                            <button 
                             onClick={async () => {
                                const formData = new FormData()
                                formData.append("username", userName.current.value)
                                formData.append("email", userEmail.current.value)
                                formData.append("avatar", fileImage.current.files[0])
                                await fetch("https://localhost:3001/login", {
                                    method: 'POST',
                                    body: formData
                                    
                                })
                               ;
                               
                              }}
                            type="button" className="login-btn">
                                Submit
                            </button>

                            </form>
                        </div>

                    
                            <Link to="/signup"  className="signup-text">
                                Sign Up
                            </Link>
                        
                        </div>
                    </div>
                </>
            )
}

export default Login
