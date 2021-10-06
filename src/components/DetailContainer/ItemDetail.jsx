import "./ItemDetail.css";
import Cont from "../Contador/Cont";


function ItemDetail(props) {
  const { producto } = props;

 
  const onAdd = (cont) => {
    console.log(`la cantidad es${cont}`);
  };

  return (
   
      <div className="card-ecommerce-2">
        <img className="img-2" src={producto.img} alt="" />
        <h1 className="price">${producto.price}</h1>
        <h1 className="name">{producto.name}</h1>
        

        <Cont item={producto} initial={1} stock={10} onAdd={onAdd} />
      </div>
    
  );
}

export default ItemDetail;
