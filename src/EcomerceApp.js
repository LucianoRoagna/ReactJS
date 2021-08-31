
import NavBarComp from './components/NavBar/NavBarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ListContainer/ItemListContainer'
import ItemDetailContainer from './components/DetailContainer/ItemDetailContainer';

 /*import Cont from './components/Contador/Cont' */





function EcomerceApp() {

   /* const onAdd = (cont) => {
    console.log(`la cantidad es ${cont}`);
    
  }
*/
  return (
    <div className="App">
      <NavBarComp />
      <ItemListContainer />
     <ItemDetailContainer/>
     
      

    </div>
  );
}

export default EcomerceApp;



/* <Cont initial={1} stock={10} onAdd={onAdd}/> */