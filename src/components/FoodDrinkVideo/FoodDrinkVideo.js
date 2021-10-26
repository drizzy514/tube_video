import "./FoodDrinkVideo.scss";
import { useEffect, useState } from "react";


/* icons */
import foods from "../Lib/Png/foods-logo.png";
import Right from "../Lib/Svg/RightArrowIcon";
import Left from "../Lib/Svg/LeftArrowIcon";
import { Link } from "react-router-dom";

function FoodDrinkVideo (){
    const [video, setVideo] = useState([])
    useEffect(() => {
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
            return setVideo(data)
        })
        .catch(err => {
            console.error(err);
        });
    }, [])


    return (
        <>
          <div className="foods">
              <div className="foods-header">
                  <img src={foods} alt="foods-logo" />
                 <Link to="/channel" >
                     <h2 className="foods-title">Football videos</h2>
                 </Link>
                  <p className="rec-text">Recommended channel for you</p>
                  <div className="subscribe-btns">
                    <button type="button" className=" btn subscribe-btn">
                                    Subscribe 2.3m
                    </button>
                    <div className="next-btns">
                                        <span className="left">
                                        <Left />
                                        </span>
                                
                                    <span className="right">
                                        <Right />
                                    </span>

                            </div>

                  </div>
              </div>
              {
                  video.length > 0 && <ul className="videos-list">
                      {
                          video.map((element) => ( (
                              
                                <li className="videos-item" key={element.title}>
                                    <Link to="/video" >
                                        <img src={element.thumbnail} alt="football-video" />

                                    </Link>
                                        <h3 className="video-photographer">{element.title}</h3>
                                        <p>{element.date}</p>
                                </li>

                              

                          )
                          ))
                      }
                  </ul>
              }
          </div>
        </>
    )
}
export default FoodDrinkVideo;