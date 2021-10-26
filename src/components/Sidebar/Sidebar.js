import "./Sidebar.scss";

import { Link, NavLink } from "react-router-dom";





// icons
import HomeIcon from "../Lib/Svg/HomeIcon";
import TrendingIcon from "../Lib/Svg/TrendingIcon";
import LibrariyIcon from "../Lib/Svg/LIbraryIcon";
import HistoryIcon from "../Lib/Svg/HistoryIcon";
import WatchIcon from "../Lib/Svg/WatchIcon";
import LikeIcon from "../Lib/Svg/LikeIcon";
import MusicIcon from "../Lib/Svg/MusicIcon";
import GamesIcon from "../Lib/Svg/GamesIcon";
import DownIcon from "../Lib/Svg/Downicon";
import User1 from "../Lib/Png/user-1.png";
import User2 from "../Lib/Png/user-2.png";
import User3 from "../Lib/Png/user-3.png";
import User4 from "../Lib/Png/user-4.png";
import User5 from "../Lib/Png/user-5.png";
import User6 from "../Lib/Png/user-6.png";





function Sidebar (){
    return (
        <>
                
            <div className="sidebar">
                <ul className="global-sidebar__list">
                
                    <li className="global-sidebar__item">
                        <HomeIcon />   <NavLink to="/" activeClassName="main-link__active"  className="global-sidebar__item-link">  Home</NavLink>
                    </li>
                    <li className="global-sidebar__item">
                        <TrendingIcon /><NavLink to="/trend" activeClassName="active-link" className="global-sidebar__item-link"> Trending</NavLink>
                    </li>
                    <br/>
                    <li className="global-sidebar__item">
                       <NavLink to="/chat" activeClassName="main-link__active"  className="global-sidebar__item-link">Online chat</NavLink>
                    </li>
                    {/* <li className="global-sidebar__item">
                        <SubscriptionIcon />     <Link to="/channel"className="global-sidebar__item-link">  Subscriptions</Link>
                    </li> */}
                </ul>
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <LibrariyIcon />   <NavLink to="/library" activeClassName="active-link" className="global-sidebar__item-link"> Library</NavLink> 
                    </li>
                    <li className="sidebar-item">
                      <HistoryIcon />  <NavLink to="/history" activeClassName="active-link" className="global-sidebar__item-link">  History</NavLink>
                    </li>
                    <li className="sidebar-item">
                     <WatchIcon />   <NavLink to="/watchlater" activeClassName="active-link" className="global-sidebar__item-link">  Watch later</NavLink>
                    </li>
                    {/* <li className="sidebar-item">
                     <StarIcon />   <NavLink to="/" activeClassName="active-link" className="global-sidebar__item-link">  Favourites</NavLink>
                    </li> */}
                    <li className="sidebar-item">
                     <LikeIcon />    <NavLink to="/likevideos" activeClassName="active-link" className="global-sidebar__item-link">  Liked videos</NavLink>
                    </li>
                    <li className="sidebar-item">
                      <MusicIcon />  <NavLink to="/music" activeClassName="active-link" className="global-sidebar__item-link">  Music</NavLink>
                    </li>
                        <li className="sidebar-item">
                         <GamesIcon />   <NavLink to="/games" activeClassName="active-link" className="global-sidebar__item-link">  Games</NavLink>
                    </li>
                </ul>
                    <p className="show-more">
                     <Link to="/" className="global-sidebar__item-link">
                     <span className="down-icon">
                            <DownIcon />
                        </span>
                        Show more
                     </Link>
                    </p>




                <p className="subscription-text">Subscriptions</p>
                <ul className="subscription-list">
                    <li className="subscription-item">
                        <img src={User1} alt="user-1"/>
                     <Link 
                        onClick={
                            function (e){
                                 window.localStorage.setItem("username", "Gussie Singleton",  e.target)
                                 window.localStorage.setItem("userImg" , User1, e.target)
                            }
                        }                     
                     to="/channel" className="subscription-link" >

                        <p>Gussie Singleton</p>
                     </Link>
                    </li>
                    <li className="subscription-item">
                        <img src={User2} alt="user-2"/>
                     <Link
                        onClick={
                            function (e){
                                 window.localStorage.setItem("username", "Nora Francis",  e.target);
                                 window.localStorage.setItem("userImg" , User2, e.target)
                            }
                        }  
                     to="/channel" className="subscription-link" >
                        <p> Nora Francis</p>

                     </Link>
                    </li>
                    <li className="subscription-item">
                        <img src={User3} alt="user-3"/>
                     <Link 
                       onClick={
                        function (e){
                         window.localStorage.setItem("username", "Belle Briggs",  e.target);
                         window.localStorage.setItem("userImg" , User3, e.target)
                        }
                    }  
                     to="/channel" className="subscription-link" >
                        <p>Belle Briggs</p>

                     </Link>
                    </li>
                    <li className="subscription-item">
                        <img src={User4} alt="user-4"/>
                     <Link
                      onClick={
                        function (e){
                            window.localStorage.setItem("username", "Eunice Cortez",  e.target)
                            window.localStorage.setItem("userImg",  User4, e.target)
                        }
                    }  
                     to="/channel" className="subscription-link" >
                        <p>Eunice Cortez</p>

                     </Link>
                    </li>
                    <li className="subscription-item">
                        <img src={User5} alt="user-5"/>
                     <Link
                      onClick={
                        function (e){
                             window.localStorage.setItem("username", "Emma Hanson",  e.target);
                             window.localStorage.setItem("userImg" , User5, e.target)
                        }
                    }  
                     to="/channel" className="subscription-link" >
                        <p>Emma Hanson</p>

                     </Link>
                    </li>
                    <li className="subscription-item">
                        <img src={User6} alt="user-6"/>
                     <Link
                      onClick={
                        function (e){
                            window.localStorage.setItem("username", "Leah Berry",  e.target)
                            window.localStorage.setItem("userImg" , User6, e.target)
                        }
                    }  
                     to="/channel" className="subscription-link" >
                        <p>Leah Berry</p>

                     </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar