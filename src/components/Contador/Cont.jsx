import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Cont.css'

function Cont({initial,stock,onAdd}) {
  const [cont, setCont] = useState(initial);

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
 }
  

  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Producto</Card.Title>
    <Card.Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur dolorum corrupti quasi dolorem non tenetur .
    </Card.Text>
    <Button variant="primary" onClick={add}>+</Button>
    <label>{cont}</label>
    <Button variant="primary" onClick={remove}>-</Button>
<Button variant="primary" onClick={handlerOnAdd}>Agregar</Button>
  </Card.Body>
</Card>
   
  );
  }


export default Cont;



// <div>
//<button onClick={add}>+</button>
//<label> {cont} </label>
//<button onClick={remove}>-</button>

//<button onClick={handlerOnAdd}>Agregar</button>
//</div>