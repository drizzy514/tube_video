import "./Login.scss";
import {  useRef, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import {LOGIN_ROUTES, REGISTRATION_ROUTES} from "../../utils/andPoints";
import {login, registration} from "../../http/authentication"
import { observer } from "mobx-react-lite";




   

    const Login = observer(() => {
        const location = useLocation()
        const isLogin = location.pathname === LOGIN_ROUTES

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const click = async() => {
            try{
                let data;
                if (isLogin) {
                    data = await login(email, password,{
                        headers: {
                            "Content-Type":"application/json",
                            "Access-Control-Allow-Origin": '*'
                        }
                    });
                } else {
                    data = await registration(email, password);
                }
            } catch(e) {
                console.log(e);
            }
    }
        
        return (
                    <>
                        <div className="login">
                            <div>
    
                            <div className="login__box">
                                <h1 className="login__title">Login Bro</h1>
                                <form action="/login"  className="login__form" method="post" >
                                <input type="text" value={email}  className="login__input" placeholder="your email"
                                    onChange={(e) => setEmail(e.target.value) }
                                />
                                <input type="password" className="login__input" value={password} placeholder="your password"
                                onChange={(e) => setPassword(e.target.value) }
                                />
                                { isLogin ? 
                                <div>
                                    not account? <Link to={REGISTRATION_ROUTES}>Registration</Link>
                                </div> 
                                :
                                <div>
                                    have account? <Link to={LOGIN_ROUTES}>Welcome</Link>
                                </div> 
                                }
                                <button 
                                 onClick={ click() }
                                type="button" className="login-btn">
                                    {isLogin ? 'Exit' : 'registration'}
                                    
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
        
    })


export default Login