
import "./ItemListContainer.css";


const ItemListContainer = () => {
  return (
    <div className="containerBienvenida container fluid">
      <button data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;Bienvenido&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;Bienvenido&nbsp;</span>
      </button>
      <div>
      <ul>
        <li>Hola crayola</li>
        <li>Hola crayola</li>
      </ul>
      </div>
    </div>
  )
}

export default ItemListContainer