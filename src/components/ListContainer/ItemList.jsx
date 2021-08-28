import React from 'react'
import Item from './Item'






function ItemList({data}) {
   
    
  



    return (
        <div className="app">   
          <ul>
          {data.map(element => <Item key={element.id}/>)}
          </ul>
          
          </div>
    )}
    
    


export default ItemList
