import React from 'react'
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'





function Cart() {
    const{setCart,cart,removeItem,totalPrice}=useContext(CartContext)


    const clear=()=>setCart([])




    return (
        
    
        <div>
      

<Button onClick={clear}>Clear items</Button>

{cart.length > 0 && (
    cart.map(element =>{
        return(
            <div key={element.item.id}>
                 <img src={element.item.img} alt="" />
                <h1>{element.item.name}</h1>
                <h2>Price:${element.item.price}</h2>
               <h3>Quantity:{element.quantity}</h3>
           
                
              
                <Button onClick={()=>removeItem(element.item.id)}>Remove from cart</Button>
        </div>
        )
    })
)}



<h4>  Total:${totalPrice()}</h4>
<Link to='./'>
<Button>Keep Buying</Button>
</Link>
</div>
        )
}
export default Cart
