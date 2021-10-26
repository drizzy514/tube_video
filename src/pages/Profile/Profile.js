import "./Profile.scss"
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";



// components
import Sidebar from "../../components/Sidebar/Sidebar"
import PhoneVideos from "../../components/PhoneVideos/PhoneVideos"
// icons
import Cover from "../../components/Lib/Png/Cover.png"; 
import videoPhoto from "../../components/Lib/Png/video-photo.png";
import Notification from "../../components/Lib/Svg/Notification";
import SearchIcon from "../../components/Lib/Svg/SearchIcon";
import User1 from "../../components/Lib/Png/user-7.png";
import User2 from "../../components/Lib/Png/user-8.png";
import User3 from "../../components/Lib/Png/user-9.png";
import Left from "../../components/Lib/Svg/LeftArrowIcon";
import Right from "../../components/Lib/Svg/RightArrowIcon";


function Profile (){

        const history = useHistory()
        const logOut = () =>{
            localStorage.clear()
            history.push("/")
        }


    const [userVideos, setUserVideos] = useState([])
            useEffect(() =>{
                fetch("https://free-football-soccer-videos1.p.rapidapi.com/v1/", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "free-football-soccer-videos1.p.rapidapi.com",
                        "x-rapidapi-key": "b7d5081a08msh6f22ba28e428322p19852djsnbd1fc1d5f391"
                    }
                })
                .then(response => {
                  return  response.json();
                })
                .then(data => setUserVideos(data))
                .catch(err => {
                    console.error(err);
                });
            }, [])
    const userName = window.localStorage.getItem("token");
    const userInput = window.localStorage.getItem("userinput");

    return (
        <>
        <div className="channel">
            <Sidebar />
            <div className="channel-hero">
                <div className="channel-body">
                    <img src={Cover} width="1200" alt="cover" />

                    <div className="channel-header">
                        <p>{userInput}</p>
                        <div className="user">  
                            <h1 className="channel-title">
                                {userName}
                            </h1>
                          
                            <p className="user-subscribe">245K subscribed</p>
                        </div>
                        <div className="subscribe">
                        <Link to="/video">Upload Video</Link>
                            
                            <Notification />
                          
                                <Link className="subscribe-btn" onClick={logOut}>LogOut</Link>
                            

                        </div>
                    </div>
                    <div className="channel-content">

                        <ul className="channel-list">
                            <li className="channel-item">
                                <Link to="/" className=" active">
                                    Home
                                </Link>
                            </li>
                            <li className="channel-item">
                                <Link to="/video" className="channel-link">
                                    Videos
                                </Link>
                            </li>
                            <li className="channel-item">
                                <Link to="/" className="channel-link">
                                    Playlists
                                </Link>
                            </li>
                            <li className="channel-item">
                                <Link to="/channel" className="channel-link">
                                    Channels
                                </Link>
                            </li>
                            <li className="channel-item">
                                <Link to="/" className="channel-link">
                                    Discussion
                                </Link>
                            </li>
                            <li className="channel-item">
                                <Link to="/" className="channel-link">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div className="channel-search">
                             <SearchIcon /> 
                             <input className="channel-input" type="text" placeholder="search..."/>
                             <button className="search-btn" type="submit">Search</button>
                        </div>
                        <p className="recomended-channel">Recommended channel</p>
                    </div>
                </div>
               <div className="chanel-video">
                   <Link to="/video" >
                        <img src={videoPhoto} alt="video" />
                   </Link>
                    <div className="video-desc">
                        <h3 className="video-title">    Choosing The Best Audio Player Software For Your Computer</h3>
                        <p className="video-text">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                        <p className="video-view">11k views  ·  6 months ago</p>
                    </div>
                   <ul className="users-list">
                       <li className="users-item">
                            <Link to="/video" className="users-channel-link" >
                                <img width="50" height="50" src={User1} alt="user-icon"/>
                                <p className="user-title">Flora Benson</p>

                            </Link>
                       </li>
                       <li className="users-item">
                            <Link to="/video" className="users-channel-link">
                                <img width="50" height="50" src={User2} alt="user-icon"/>
                                <p className="user-title">Violet Cobb</p>

                            </Link>
                       </li>
                       <li className="users-item">
                            <Link to="/video" className="users-channel-link" >
                                <img width="50" height="50" src={User3} alt="user-icon"/>
                                <p className="user-title">Phillip Mullins</p>

                            </Link>
                       </li>
                   </ul>
                </div> 
                <div className="channel-user">
                    <h3 className="channel-title">{userName}  videos</h3>
                        <div className="next-btns">
                                    <span className="left">
                                        <Left />
                                    </span>
                            
                                <span className="right">
                                    <Right />
                                </span>

                         </div>

                </div>
                <div className="channel-user-videos">
                   {
                       userVideos.length > 0 &&  <ul className="video-list">
                       {
                           userVideos.map((userVideo) =>(
                             
                            <li className="video-item" key={userVideo.title} >
                              <Link to="/video">
                              <img width="250" height="150" src={userVideo.thumbnail} alt="user-video" />
                              </Link>
                                <h3>{userVideo.title}</h3>
                                <p>{userVideo.date}</p>
                            </li>
                           ))
                       }
                   </ul>
                   }
                </div>
            </div>
        </div>


        <PhoneVideos />
        </>

    )
}
export default Profile