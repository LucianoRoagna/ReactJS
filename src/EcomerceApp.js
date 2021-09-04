import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBarComp from './components/NavBar/NavBarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ListContainer/ItemListContainer';
import ItemDetailContainer from './components/DetailContainer/ItemDetailContainer';

 //import Cont from './components/Contador/Cont' 





function EcomerceApp() {

    /*const onAdd = (cont) => {
    console.log(`la cantidad es ${cont}`);
     } */
  

  return (
    <div className="App" >
<Router>
                <NavBarComp />
                    <Switch>

                        <Route exact path='/'>
                            <ItemListContainer  />
                        </Route>
                      

                        <Route exact path='/brand/:category'>
                            <ItemListContainer />
                        </Route>


                        <Route exact path='/brand/Home'>
                          <ItemDetailContainer/>
                        </Route>
                       
                        <Route exact path='/Detail/:id'>
                          <ItemDetailContainer/>
                          </Route> 
                        
                        {/* <Cart /> */}
                    </Switch>
                {/* <Footer /> */}
                {/* <ItemCount /> */}
            </Router>


    </div>
  )
}

export default EcomerceApp;



/*  */