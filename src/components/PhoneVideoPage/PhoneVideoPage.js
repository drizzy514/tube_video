import "./PhoneVideoPage.scss"




import FoodLogo from "../../components/Lib/Png/foods-logo.png";
import { Link } from "react-router-dom";

function  PhoneVideoPage ()  {
    return (
        <>
            <div className="channel-user--search">
                 <img className="food-icon" src={FoodLogo} alt="food-icon" width="68" height="68" />
                 <div>
                     <h3 className="channel-user--search__title">Food & Drink</h3>
                     <p>245K subscribed</p>
                 </div>
                 <Link to="/channel" className="channel-user--search__link">
                     Subscribe
                 </Link>
            </div>
        </>
    )
}
export default PhoneVideoPage