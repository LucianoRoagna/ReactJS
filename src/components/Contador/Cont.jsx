import React, { useState, } from 'react';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './Cont.css'



  function Cont({initial,stock,onAdd,item}) {
  const [cont, setCont] = useState(initial);
  const[changeButton,setChangeButton]=useState(false)
  const{addToCart}=useContext(CartContext)
  
  const add = () => {
    if(cont < stock)
    setCont(cont + 1);
  };

  const remove = () => {
    if(cont > initial)
    setCont(cont - 1);
  };


  

 const handlerOnAdd=(quantity)=>{
   console.log(quantity)
   addToCart(item,quantity)
   setChangeButton(true)
 }


 
  

  return (

    
   
   <div> 
      <Button variant="primary" onClick={add}>+</Button>
      <label>{cont}</label>
      <Button variant="primary" onClick={remove}>-</Button>
  
  {
    changeButton?
    <Link to='/Cart'>
     <Button  variant="primary"  >Go to cart</Button>
    </Link>
   
    :
    <Button variant="primary" onClick={handlerOnAdd}>Add to cart</Button>
  }
  
   
   
  </div>
  );
  }


export default Cont;




/*  */







// <div>
//<button onClick={add}>+</button>
//<label> {cont} </label>
//<button onClick={remove}>-</button>

//<button onClick={handlerOnAdd}>Agregar</button>
//</div>