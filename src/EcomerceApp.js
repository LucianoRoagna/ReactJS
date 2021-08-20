
import NavBarComp from './components/NavBar/NavBarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ListContainer/ItemListContainer'





function EcomerceApp() {
  return (
    <div className="App">
      <NavBarComp />
      <ItemListContainer greeting="Hola" />
      

    </div>
  );
}

export default EcomerceApp;
