import "./UserVideo.scss";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";



// icons 
import Left from "../Lib/Svg/LeftArrowIcon";
import Right from "../Lib/Svg/RightArrowIcon";

function UserVideo (){
        const [ videos, setVideos ] = useState([]);
        useEffect(() =>{
            fetch("https://free-football-soccer-videos1.p.rapidapi.com/v1/", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "free-football-soccer-videos1.p.rapidapi.com",
                    "x-rapidapi-key": "b7d5081a08msh6f22ba28e428322p19852djsnbd1fc1d5f391"
                }
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                return setVideos(data)
            })
            .catch(err => {
                console.error(err);
            });
        },[])
    return (
        <>
            <div className="user-videos">
                <div className="user-videos__header">
                    
                    <Link to="/profile" >
                        
                         <h1 className="user-name">

                             { window.localStorage.getItem("token") }
                         </h1>
                    </Link>
              
                       <div className="arrows">
                                <span className="arrow-left">
                                    <Left />
                                </span>
                        
                            <span className="arrow-right">
                                <Right />
                            </span>

                       </div>

                </div>

              {videos.length > 0 &&
                ( <ul className="videos-list">
                  {
                      videos.map((video) =>(
                          
                         ( <li className="videos-item" key={video.id}>
                             <Link to="/video" className="video-link">
                                    <img src={video.thumbnail} alt="video"  width="250" height="150"/> 
                                    </Link>
                                    <h3 className="video-title">{video.title}</h3>  
                                    
                                 <p>
                                     <span className="video-view">80k views  ·  3 days ago</span>
                                     <span className="video-autor">Dollie Blair</span>
                                 </p>
                            

                          </li>)
                      ))
                    }

                  </ul>)}

                 
            </div>
        </>
    )
}
export default UserVideo