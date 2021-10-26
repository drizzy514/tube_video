import "./WatchHistory.scss";

import { Link } from "react-router-dom";

import videoData from "../../assets/data/videoData.js";
import Sidebar from "../Sidebar/Sidebar"

function WatchHistory () {
    return (
        <>
            <div className="history">
                <Sidebar />
                <div className="history__content">
                    <h2 className="history__title">Watch history</h2>
                    <p className="history__text" >Today</p>
                        <ul className="history__videos">
                            {
                                videoData.map((video) => {
                                    return (
                                        <li className="history__videos-item">
                                            <iframe title="YoutubeVideo" width="400" height="213" src={video.url}
                                            frameBorder="no"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                           <Link to="/video">
                                           <h3 className="history__videos-title"> {video.title} </h3>
                                           <p className="history__videos-text">
                                               youtube video
                                           </p>
                                           <p className="history__videos-desc">
                                               youtube video
                                           </p>
                                           </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                </div>
            </div>
        </>
    )
}
export default WatchHistory