
import NavBarComp from './components/NavBar/NavBarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ListContainer/ItemListContainer'
import Cont from './components/Contador/Cont'





function EcomerceApp() {

  const onAdd = (cont) => {
    console.log(`la cantidad es ${cont}`);
    
  }

  return (
    <div className="App">
      <NavBarComp />
      <ItemListContainer />
      <Cont initial={1} stock={10} onAdd={onAdd}/>
      

    </div>
  );
}

export default EcomerceApp;
