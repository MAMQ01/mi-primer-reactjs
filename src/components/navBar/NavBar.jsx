import "./NavBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
    return (
        <div>
            <div className="containerHeader container-fluid">
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <div>
                            <img
                                src="https://res.cloudinary.com/demo/image/upload/w_70,h_53,c_scale/turtles.jpg"
                                alt=""
                            />
                        </div>
                        <a class="navbar-brand" href="#">Restaurante el Cangrejo Feliz</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="containerCart">
                                <AiOutlineShoppingCart style={{
                                    fontSize: "2rem",
                                    color: "black"
                                }}/>
                            </div>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Menu de dia</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Comida Italiana</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Comida Asiatica</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        De la Casa
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Cangrejo Feliz</a></li>
                                        <li><a class="dropdown-item" href="#">Langosta Feliz</a></li>
                                        <li><a class="dropdown-item" href="#">Salmón Feliz</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



            </div>
        </div>
    );
};

export default NavBar;
