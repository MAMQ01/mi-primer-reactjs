import NavBar from "./components/navBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import CardWidget from "./components/cardWidget/CardWidget";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Revisa los platos recomendados"} />
    </div>
  );
}

export default App;
