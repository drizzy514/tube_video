import "./Trend.scss";



import Sidebar from "../Sidebar/Sidebar"


// icons 
import trendIcon from "../Lib/Png/star_filled_48px.png"
import musicIcon from "../Lib/Png/music_48px.png";
import broadcastIcon from "../Lib/Png/online_48px.png";
import gameIcon from "../Lib/Png/xbox_64px.png";
import newsIcon from "../Lib/Png/us_news_64px.png";
import sportIcon from "../Lib/Png/trophy_48px.png";
import studyIcon from "../Lib/Png/study_64px.png";
import fashionIcon from "../Lib/Png/woman_dancing_48px.png";
import popularVideo from "../../assets/popularVideo";

const Trend = function () {
    return (
        <>
            <div className="trend-content">
                <Sidebar />
                <div>
                <ul className="trend-list">
                    <li className="trend-item">
                        <div className="trend-card">
                            <img src={trendIcon} alt="icon" />
                            <h3 className="item-title">In trend</h3>
                        </div>
                    </li>
                    
                    <li className="trend-item">
                    <div className="trend-card">
                        <img src={musicIcon} alt="icon" />
                            <h3 className="item-title">Music</h3>
                        </div>
                    </li>
                    <li className="trend-item">
                         <div className="trend-card">
                         <img src={broadcastIcon} alt="icon" />
                            <h3 className="item-title">Broadcasts</h3>
                        </div>
                    </li>
                    <li className="trend-item">
                         <div className="trend-card">
                         <img width="48" height="48" src={gameIcon} alt="icon" />
                            <h3 className="item-title">Video game</h3>
                        </div>
                    </li>
                    <li className="trend-item">
                         <div className="trend-card">
                         <img width="48" height="48" src={newsIcon} alt="icon" />
                            <h3 className="item-title">News</h3>
                        </div>
                    </li>
                    <li className="trend-item">
                         <div className="trend-card">
                         <img src={sportIcon} alt="icon" />
                            <h3 className="item-title">Sport</h3>
                        </div>
                    </li>
                    <li className="trend-item">
                         <div className="trend-card">
                         <img width="48" height="48" src={studyIcon} alt="icon" />
                            <h3 className="item-title">Study</h3>
                        </div>
                    </li>
                    <li className="trend-item">
                         <div className="trend-card">
                         <img src={fashionIcon} alt="icon" />
                            <h3 className="item-title">Fashion and beauty</h3>
                        </div>
                    </li>
                </ul>
            <h2 className="trend-content__title">Popular videos</h2>
                        {
                            popularVideo.length > 0 && <ul className="popular-list-video">

                                {
                                    popularVideo.map((video) =>(
                                        (
                                            <li className="popular-video-item" key={video.id}>
                                                <iframe title="YoutubeVideo" width="550" height="200" src={video.url}
                                            frameBorder="no"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                            <div className="video-description">
                                                <h3>{video.title}</h3>
                                                <p> Lyrical Lemonade Presents:
                                                    Nardo Wick - Who Want Smoke??  </p>
                                                    <p>They may have survived the dalgona challenge in the drama, but how skilled are the stars of SQUID GAME in real life? Watch the cast try out all the tricks they’ve picked up on screen to avoid...</p>

                                            </div>
                                            
                                            </li>
                                        )
                                    ))
                                }
                            </ul>
                        }
               </div> 
            

            </div>
        </>
    )
}


export default Trend