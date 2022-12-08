
import "./ItemListContainer.css";


const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div className="containerBienvenida container fluid">
        <button data-text="Awesome" class="button">
          <span class="actual-text">&nbsp;Bienvenido&nbsp;</span>
          <span class="hover-text" aria-hidden="true">&nbsp;Bienvenido&nbsp;</span>
        </button>
      </div>

      <div className="containerVentas">
        <div className="containerProducto">
          <ul>
            <li>Hola crayola</li>
            <li>Hola crayola</li>
          </ul>
        </div>
      </div>
      <button class="cta">
        <span class="hover-underline-animation">{greeting}</span>
        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
          <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
        </svg>
      </button>
    </>
  )
}

export default ItemListContainer