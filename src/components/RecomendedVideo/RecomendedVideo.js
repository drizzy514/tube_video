import "./RecomendedVideo.scss"
import { useEffect, useState } from "react";


// icons
import Left from "../Lib/Svg/LeftArrowIcon";
import Right from "../Lib/Svg/RightArrowIcon";
import { Link } from "react-router-dom";



function RecomendedVideo (){
    const [recomendedVideo, setRecomendedVideo] = useState([])
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
        return setRecomendedVideo(data)
    })
    .catch(err => {
        console.error(err);
    });
  }, [])
    return (
        <>
            <div className="recomended">
                <div className="recomended-header">
                    <h2 className="recomended-title">Recommended</h2>
                    <div className="arrows-btns">
                                <span className="arrow-left">
                                    <Left />
                                </span>
                        
                            <span className="arrow-right">
                                <Right />
                            </span>

                       </div>
                </div>
                {
                 recomendedVideo.length > 0 && <ul className="videos-list">
                     
                     {
                         recomendedVideo.map( (video) => (
                             (
                                   
                                     
                             <li className="videos-item" key={video.id}>
                             <Link to="/video" className="video-link">
                                 <img width="540" height="250" src={video.thumbnail} alt="video-img" />
                                 </Link>
                                 <h3 className="video-photographer">
                                    {video.title}
                                 </h3>
                                 <p>
                                     <span className="video-view">34k views  ·  5 days ago</span>
                                     <span className="autor">Edward Osborne</span>
                                 </p>
                           
                         </li>
                                )
                         ) )
                     }
                 </ul> 
                  }
                
          </div>
        </>
    )
}
export default RecomendedVideo