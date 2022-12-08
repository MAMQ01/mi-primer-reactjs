import "./CardWidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

const CardWidget = () => {
    return (
        <div className="containerCart">
        <AiOutlineShoppingCart style={{
            fontSize: "2rem",
            color: "black"
        }}/>
    </div>
    )
}

export default CardWidget