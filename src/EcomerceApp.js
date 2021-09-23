import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBarComp from './components/NavBar/NavBarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ListContainer/ItemListContainer';
import ItemDetailContainer from './components/DetailContainer/ItemDetailContainer';
import Cart from './components/Widget/Cart'
import CartContextProvider from './context/CartContext';






function EcomerceApp() {




  return (
    <CartContextProvider>
      <div className="App" >
        <Router>
          <NavBarComp />
          <Switch>

            <Route exact path='/'>
              <ItemListContainer />
            </Route>


            <Route exact path='/brand/:category'>
              <ItemListContainer />
            </Route>


            <Route exact path='/brand/Home'>
              <ItemDetailContainer />
            </Route>

            <Route exact path='/Detail/:id'>
              <ItemDetailContainer />
            </Route>
            <Route exact path='/Cart'>
              <Cart />
            </Route>

          </Switch>


        </Router>


      </div>
    </CartContextProvider>
  )
}

export default EcomerceApp;


