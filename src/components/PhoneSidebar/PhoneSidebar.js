import "./PhoneSidebar.scss";
import HomeIcon from "../Lib/Svg/HomeIcon";
import { Link } from "react-router-dom";
import LibrariyIcon from "../Lib/Svg/LIbraryIcon";
import TrendingIcon from "../Lib/Svg/TrendingIcon";
import HistoryIcon from "../Lib/Svg/HistoryIcon";
import WatchIcon from "../Lib/Svg/WatchIcon";
import LikeIcon from "../Lib/Svg/LikeIcon";
import MusicIcon from "../Lib/Svg/MusicIcon";
import GamesIcon from "../Lib/Svg/GamesIcon";


function PhoneSidebar () {
    return (
        <>
            <ul className="phone-sidebar__list">
                <li className="phone-sidebar__item">
                   <Link to="/" className="link">
                    <HomeIcon />
                        <p>Home</p>
                   </Link>
                </li>
               
                <li className="phone-sidebar__item">
                <li className="global-sidebar__item">
                    <Link to="/trend" className="link">
                        <TrendingIcon />
                        <p>Trend</p>
                    </Link>
                       
                    </li>
                </li>
                <li className="phone-sidebar__item">
               <    Link to="/library" className="link">
                        <LibrariyIcon />
                        <p>Librariy</p>

                    </Link>
                </li>
                <li className="phone-sidebar__item">
               <    Link to="/history" className="link">
                        <HistoryIcon />
                        <p>History</p>

                    </Link>
                </li>
                <li className="phone-sidebar__item">
               <    Link to="/watchlater" className="link">
                        <WatchIcon />
                        <p>Watch later</p>

                    </Link>
                </li>
                
                <li className="phone-sidebar__item">
               <    Link to="/likevideos" className="link">
                        <LikeIcon />
                        <p>Liked videos</p>

                    </Link>
                </li>
                <li className="phone-sidebar__item">
               <    Link to="/music" className="link">
                        <MusicIcon />
                        <p>Music</p>

                    </Link>
                </li>
                <li className="phone-sidebar__item">
               <    Link to="/games" className="link">
                        <GamesIcon />
                        <p>Games</p>

                    </Link>
                </li>
            </ul>
        </>
    )
}
export default PhoneSidebar