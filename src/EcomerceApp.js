import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBarComp from './components/NavBar/NavBarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ListContainer/ItemListContainer';
import ItemDetailContainer from './components/DetailContainer/ItemDetailContainer';
//import CartWidget from './components/Widget/CartWidget';
//import { cartContext } from './context/cartContext';
 //import Cont from './components/Contador/Cont' 
 //import { useState } from 'react';





function EcomerceApp() {


  

  return (
    /* <cartContextProvider> */
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
                        <Route exact path='/CartWidget'>
                         
                        </Route>
                        
                    </Switch>
                
                
            </Router>


    </div>
   /* </cartContextProvider> */
  )
}

export default EcomerceApp;



/*  */