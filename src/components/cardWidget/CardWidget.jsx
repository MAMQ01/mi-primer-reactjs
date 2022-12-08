import "./CardWidget.css";
import { MdRestaurantMenu } from "react-icons/md";


const CardWidget = () => {
    return (
        <div className="containerCart">
            <MdRestaurantMenu style={{
                fontSize: "2rem",
                color: "White"
            }} />
        </div>
    )
}

export default CardWidget