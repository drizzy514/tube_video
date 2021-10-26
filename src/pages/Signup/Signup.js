import { Link } from "react-router-dom";
import "./Signup.scss";


function Signup (){
    return (
        <>  <div className="login">
             <div className="login__box">
                            <h1 className="login__title">Signup Bro</h1>
                            <form className="login__form">
                            <input type="text" className="login__input" placeholder="your name"
                                onChange={
                                    function (e) {
                                        return window.localStorage.setItem("token", e.target.value)
                                    }
                                }
                            />
                            <input type="text" className="login__input" placeholder="your email"
                            onChange={
                                function (e) {
                                    return window.localStorage.setItem("userinput", e.target.value)
                                }
                            }

                            />
                            <input className="login__input" type="password" placeholder="your password"/>
                            <Link className="login-btn">
                                Submit
                            </Link>

                            </form>
                            <Link className="login-text" to="/login">
                                Login
                            </Link>

                        </div>

        </div>
        </>
    )
}
export default Signup