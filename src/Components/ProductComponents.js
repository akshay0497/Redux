import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductComponents = () => {
  const products = useSelector((state) => state.productReducer.productList);

  const allMarkup = (
    <div className="container">
      <div className="row">
        {products.map((prod) => (
          <div className="col-md-3" key={prod.id}>
          <Link to={`/product/${prod.id}`}>
            <div className="card" style={{ marginBottom: "15px" }}>
              <img
                src={prod.image}
                className="card-img-top"
                alt={prod.title}
                style={{ height: "200px", objectFit: "cover", padding:"5px", width:"100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <div className="card-title" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                  <span>Rating : {prod.rating?.rate} of 5</span>
                  <span>Count: {prod.rating?.count}</span>
                </div>
                <strong className="card-title">Price : {prod.price}</strong>
                <p className="card-text" style={{ height: "100px", overflow: "hidden",
                  wordWrap: "break-word",
                  whiteSpace: "normal"
                }}
                >
                  {prod.description}
                </p>

              </div>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Now you can render allMarkup where you need to display the products
  


  return (
    <>
      {/* <div className="card-group">
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div> */}
      {allMarkup}

    </>
  )
}

export default ProductComponents