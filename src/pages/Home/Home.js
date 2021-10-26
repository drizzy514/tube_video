import "./Home.scss";

// components

import Sidebar from "../../components/Sidebar/Sidebar";
import UserVideo from "../../components/UserVideo/UserVideo";
import RecomendedVideo from "../../components/RecomendedVideo/RecomendedVideo";
import FoodDrinkVideo from "../../components/FoodDrinkVideo/FoodDrinkVideo";
import PhoneVideos from "../../components/PhoneVideos/PhoneVideos";

function Home (){
    return(
        <>
       
          <div className="sidebar-body">
             <Sidebar />
             <div className="components">
                  <PhoneVideos />
                  <UserVideo  />
                <RecomendedVideo />
                <FoodDrinkVideo />

             </div>
          </div>
        
        </>
    )
}
export default Home