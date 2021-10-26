
import "./Video.scss";
import data from "../../assets/data/data";
import { Link } from "react-router-dom";


// icons

import BadHandIcon from "../../components/Lib/Svg/BadHandIcon";
import GoodIcon from "../../components/Lib/Svg/GoodIcon";
import FoodLogo from "../../components/Lib/Png/foods-logo.png";
import PhoneVideoPage from "../../components/PhoneVideoPage/PhoneVideoPage";
import videoData from "../../assets/data/videoData";
import { useEffect, useRef, useState } from "react";

function Video (){

    const video = useRef()
    const userName = useRef()
    const content = useRef()
   const [ addVideo, setVideo ] = useState([])
    return <>
      
        {
            useEffect(() => {
                fetch("http://localhost:3001/upload", {
                    method: "GET",

                }).then(response => response.json())
                .then(data => {
                    return setVideo(data)
                }  )
            }, [])
        } 
        
         <div className="youtube-video">
             <div className="tube-video">
               


             <iframe title="pdp academy" width="500" height="400" src="https://www.youtube.com/embed/L-Rjyl52sPQ"
            frameBorder="no"
               
                ></iframe>
                <h1 className="youtube-video__title">Dude You Re Getting A Telescope</h1>
                <form action="/upload" method="post">
                <input ref={userName} type="text" placeholder="your name"/>
                <input ref={content} type="text" placeholder="content"/>
                <input ref={video} type="file"/>
                <button type="button" onClick={async () => {
                    console.log("a")
                    const formData = new FormData()
                    formData.append("username", userName.current.value)
                    formData.append("content", content.current.value)
                    formData.append("video", video.current.files[0])
                    await fetch("http://localhost:3001/upload", {
                        method: "POST",
                        body: formData,
                    })
                }}>  Add video </button>
            </form>
                <div className="youtube-video__statics">
                    <p>123k     <span>views</span> </p>
                <div className="buttons">
                    <button type="button" className="static-btn" >
                            <GoodIcon />  123k    
                        </button>
                        <button type="button" className="static-btn" > 
                            <BadHandIcon />   435k
                        </button>
                        <button type="button" className="static-btn" > 
                            Share
                        </button>
                </div>
                </div>
                        
                <div className="youtube-video__description">
                    <img className="food-icon" src={FoodLogo} alt="food-icon" width="80" height="80" />
                    <div className="youtube-video__text">
                       <Link to="/channel"> <h3 className="foods-title">Football</h3></Link>
                        <p className="video-date">Published on 14 Jun 2019</p>
                        <p className="user-text">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                        <Link to="/" className="show-more__link">Show more</Link>
                    </div>
                    <div className="youtube-video__btn">
                            <button type="button" className=" btn subscribe-btn">
                                            Subscribe 2.3m
                            </button>

                    </div>
                </div>
             </div>
             <div className="next-videos">
             {
                    addVideo.length > 0 &&    <ul className="video-list">
                    {
                        addVideo.map((i) => (
                            (
                                console.log(i),
                                <li className="video-item" key={i.videoId}>
                                <Link to="/profile">
                                    {i.username}
                                </Link>
                            <video src="http://localhost:3001/upload/"  controls  width="320" height="320">
                                
                                     
                            </video>
                                <h3>{i.content}</h3>
                                
                              </li>
                            
                            )
                        ))
                         }
               </ul>
                }
                 <div className="next-videos__header">
                       <p className="next-videos__title">Next</p>
                       <p className="autoplay">autoplay</p>
                       <button type="button" className="autoplay-btn">
                           <span className="oval"></span>
                       </button>
                 </div>

                {
                data.length > 0 && <ul className="next-videos__list">
                    {
                            data.map((video) => (
                                (
                                    <li className="next-videos__item" key={video.id}>
                                            <iframe title="YoutubeVideo" width="367" height="213" src={video.url}
                                            frameBorder="no"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                            <h3>{video.title}</h3>
                                            <p>123k views    <span className="video-user">Dollie Blair</span></p>
                                    </li>
                                )
                            ))
                    }
                </ul>
                }
             </div>
        </div>           
            
                 <PhoneVideoPage />
               
        
            <ul className="phone-videos__list">
                {
                        videoData.map((item) => (
                            (
                                <li className="phone-videos__item" key={item.id}>
                                        <iframe title="YoutubeVideo" width="290" height="213" src={item.url}
                                            frameBorder="no"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                           <Link to="/video">
                                           <h3> {item.title} </h3>
                                           </Link>
                                </li>
                            )
                        )
                          
                        )
                }
            </ul>


            
    </>
}
export default Video
