import React, { useState } from "react";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { getFirestore } from "../utils/getFirebase";
import "./Cart.css"
import tacho from "../img/tacho-de-reciclaje.png";


function Cart() {

const[formData,setFormData]=useState({
  name:'',
  email:'',
  tel:'',
  adress:''
})


function change(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
}


function submit(e){
  e.preventDefault()

  const newOrder={
    buyer:formData,
    items:cart,
    total:totalPrice()

  }
const database=getFirestore()
const orders=database.collection('orders')
//controlar stock



orders.add(newOrder)
.then(resp=>alert(`Su N° de compra es ${resp.id}`))
//limpiar 
.finally(()=>
setFormData(initialState))
clear()
}

  const { setCart, cart, removeItem, totalPrice } = useContext(CartContext);

  const clear = () => setCart([]);

  return (
    <div className="Cart">
      <Button className="Clear-button" onClick={clear}>Clear items</Button>

      {cart.length > 0 &&
        cart.map((element) => {
          return (
            <div className="Prod"  key={element.item.id}>
              
              <h1>{element.item.name}</h1>
              <h2>Price:${element.item.price}</h2>
              <h3 className="Quantity">Quantity:{element.quantity}</h3>

              
                <img className="tacho" src={tacho} alt="" onClick={() => removeItem(element.item.id)}/>
                
            </div>
          );
        })}

      <h4 className="Total-Price"> Total:${totalPrice()}</h4>
      <Link to="./">
        <Button className="Keep-Buying">Keep Buying</Button>
      </Link>

      <Form className="Form-1" onSubmit={submit} onChange={change}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label> Name</Form.Label>
            <Form.Control
              name="name"
              value={formData.name}
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={formData.email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email2"
              value={formData.email}
              type="email"
              placeholder="Confirm email"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="tel"
              value={formData.tel}
              placeholder="Enter tel"
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="adress"
              value={formData.adress}
              placeholder="Enter adress"
            />
          </Form.Group>
        </Row>

        <Button className="submit-1" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Cart;


const initialState={
  name:'',
  email:'',
  tel:'',
  adress:''
}
