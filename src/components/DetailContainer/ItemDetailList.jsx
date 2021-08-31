import ItemDetail from "./ItemDetail";



function ItemDetailList({product}) {
    return (
        <div classname="App">
            <ul>
                {product.map(element =><ItemDetail key={element.id} products={element}/>)}
            </ul>
        </div>
    )
}

export default ItemDetailList


