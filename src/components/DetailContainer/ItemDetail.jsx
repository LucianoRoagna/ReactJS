import './ItemDetail.css'

function ItemDetail({products}) {
    return (
        <div
        data-aos='fade-up'
        className='col-12 col-md-6 col-lg-4 col-xl-3'
      >
        <div className='card-ecommerce'>
        <i className="icon-favorites-card far fa-heart" />
        <img className="img" src={products?.img}  alt="" />
        <h1 className="price">${products?.price}</h1>
         <h1 className="name">{products?.name}</h1>
         <button className="btn" type="button" name="button">Buy</button>
        </div>
    </div>
    )
}

export default ItemDetail
