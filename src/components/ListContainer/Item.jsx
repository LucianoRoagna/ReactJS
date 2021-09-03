 // import Card from 'react-bootstrap/Card'
 // import Button from 'react-bootstrap/Button'
//import  CardGroup  from 'react-bootstrap/CardGroup'
//import { Link } from 'react-router-dom'
import './Item.css'
import { Link } from 'react-router-dom'



function Item({products}) {

   
    return (
      
        <div
            data-aos='fade-up'
            className='col-12 col-md-6 col-lg-4 col-xl-3'
          >
            <div className='card-ecommerce'>
            <i className="icon-favorites-card far fa-heart" />
            <img className="img" src={products.img} alt="" />
            <h1 className="price">${products.price}</h1>
             <h1 className="name">{products.name}</h1>
             <Link to="/Detail">
             <button className="btn" type="button" name="button">Find more</button>
             </Link>
            </div>
        </div>
        
    )
}

export default Item




/*  <Card 
      style={{ width: '150px' }}>
     <Card.Img variant="top" src={products.img} />
     <Card.Body>
       <Card.Title>${products.price}</Card.Title>
       <Card.Text>
         {products.name}
       </Card.Text>
       <Button variant="primary">Add</Button>
     </Card.Body>
   </Card>
        */


