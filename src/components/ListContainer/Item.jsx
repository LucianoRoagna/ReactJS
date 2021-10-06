import "./Item.css";
import { Link } from "react-router-dom";
import React from "react";





function Item({ products }) {
  return (

    
    
  
<div className="card-ecommerce">


<div className="content">
    <img className="img" src={products.img} alt="images" />
    <h1 className="price">${products.price}</h1>
    <h1 className="name">{products.name}</h1>
    <Link to={`/Detail/${products.id}`}>
      <button className="btn" type="button" name="button">
        Find more
      </button>
    </Link>

   
  
  </div>
    </div>
    
    ); 
   
     }


export default Item;







/* <div className='col-12 col-md-6 col-lg-2 col-xl-4'>  */
