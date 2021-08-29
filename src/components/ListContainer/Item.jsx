
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './Item.css'




function Item({products}) {

   
    return (

        <Card style={{ width: '11rem' }}>
        <Card.Img variant="top" src={products.img} />
        <Card.Body>
          <Card.Title>{products.price}</Card.Title>
          <Card.Text>
            {products.name}
          </Card.Text>
          <Button variant="primary">Add</Button>
        </Card.Body>
      </Card>
      
   
        
    )
}

export default Item




/* <div className="App">

<div key={products.id} className="card w-50 mt-2">
             <div className="card-header">
                 {products.name}
             </div>
             <div className="card-body">
                 {products.price}
             </div>
             <div className="card-body">
                 {products.img}
             </div>
         </div> 
 

    </div>
       */
