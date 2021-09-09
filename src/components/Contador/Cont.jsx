import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './Cont.css'

  function Cont({initial,stock,onAdd}) {
  const [cont, setCont] = useState(initial);
const[changeButton,setChangeButton]=useState(false)
  const add = () => {
    if(cont < stock)
    setCont(cont + 1);
  };

  const remove = () => {
    if(cont > initial)
    setCont(cont - 1);
  };

 const handlerOnAdd=()=>{
   onAdd(cont)
   setCont(initial)
   setChangeButton(true)
 }


 
  

  return (

    
   
   <div> 
      <Button variant="primary" onClick={add}>+</Button>
      <label>{cont}</label>
      <Button variant="primary" onClick={remove}>-</Button>
  
  {
    changeButton?
    <Link to='/CartWidget'>
     <Button classname="button2" variant="primary" >Go to cart</Button>
    </Link>
   
    :
    <Button className="button1" variant="primary" onClick={handlerOnAdd}>Add to cart</Button>
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