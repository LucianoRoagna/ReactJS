import React, { useState } from 'react';

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
    <div>
      <button onClick={add}>+</button>
      <label> {cont} </label>
      <button onClick={remove}>-</button>

      <button onClick={handlerOnAdd}>Agregar</button>
    </div>
  );
  }


export default Cont;
