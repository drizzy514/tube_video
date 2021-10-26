import { Link } from "react-router-dom";
import data from "../../assets/data/data";
import ("./PhoneVideos.scss");
function PhoneVideos () {
    return (
        <>
            <ul className="phone-videos__list">
                    {
                        data.map((video) => (
                            (
                                <li className="phone-videos__item" key={video.id}>
                                    <iframe title="YoutubeVideo" width="290" height="213" src={video.url}
                                            frameBorder="no"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                           <Link to="/video">
                                           <h3> {video.title} </h3>
                                           </Link>
                                            <span className="video-view">80k views  ·  3 days ago</span>
                                     <span className="autor">Dollie Blair</span>
                                </li>
                            )
                        ) )
                    }
            </ul>
        </>
    )
}
export default PhoneVideos