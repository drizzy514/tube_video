import "./SiteHeader.scss";
import { Link } from "react-router-dom";

// icons

import YoutubeLogo from "../Lib/Svg/YoutubeLogo";
import VideoIcon from "../Lib/Svg/VideoIcon";
import MenuLink from "../Lib/Svg/MenuLink";
import Notification from "../Lib/Svg/Notification";

import SearchIcon from "../Lib/Svg/SearchIcon";

function SiteHeader (){
    
    
    
        const toggleBtn = function () {
            const sidebar = document.querySelector(".sidebar")
            sidebar.classList.toggle("sidebar-active")
        }
        const toggleBgColor = function () {
            const app = document.querySelector(".app")
            app.classList.toggle("app-active")
        }
    
    return (
        <>
            <div className="site-header">
            
                
                <button className="hamburger-menu" type="button"
                        onClick={toggleBtn}
               
                >
                        <span className="hamburger-btn">
                        <span className="hamburger-button"></span>

                        </span>

                </button>
              
             
               
                 <Link to="/" className="site-logo" >
                   <YoutubeLogo />
                 </Link>
                 <div className="profile-content">
                    <Link to="/profile" className="profile-link">
                      
                        {window.localStorage.getItem("token")}
                    </Link>
                </div>
                 <div className="search">
                    <input type="text" className="search-input" placeholder="Search" />
                  <span className="search-icon">  <SearchIcon  /></span>

                 </div>
                 <div className="site-icons">

                    <span className="icon">
                    <Link to="/video" >
                            <VideoIcon />
                    </Link>

                    </span>
                    <span className="icon">
                     <MenuLink />

                    </span>
                    <span className="icon">
                     <Notification />

                    </span>
                 </div>
                    <span className="user-icon">
                    <Link to="/login" className="login-link" >
                        Login in
                    </Link>

                        <label className="toggle-wrapper" >
                            <input type="checkbox" onClick={toggleBgColor} />
                            <span className="slider" ></span>
                        </label>
                    
                    {/* .toggle-wrapper
                    .toggle
                        input#gravity(type="checkbox")
                        label.toggle-item(for="gravity")
                    .name Gravity */}

                    </span>
            </div> 


             

        </>
    )
}
export default SiteHeader