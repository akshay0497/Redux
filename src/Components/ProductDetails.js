import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedProducts , removeProducts} from '../Redux/actions/product-action';


const ProductDetails = () => {

  const {productId} = useParams();
  console.log("Proiduct ID", productId)

  const dispatch = useDispatch();
  const product = useSelector((state)=>(state.selectedProductReducer))

  const {image, title, price, category, description, rating} = product

  const getProducts = async () => {
    try {
      const result = await axios.get(`https://fakestoreapi.com/products/${productId}`);
     console.log(result.data); 
      dispatch(selectedProducts(result.data))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if(productId && productId !== ""){
      getProducts();
    }
    return()=>{
      dispatch(removeProducts());
    }
  }, [productId]);

  console.log("product from store", product)

  return (
    <>
    {Object.keys(product).length === 0 ? (<>Loading Data.....</>):
   ( <>
      <div className="card" style={{width: "18rem", margin:"20px"}}>
  <img src={image} className="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Price : {price}</li>
    <li className="list-group-item">Rating : {rating?.rate} of 5</li>
    <li className="list-group-item">Count : {rating?.count}</li>
    <li className="list-group-item">Category : {category}</li>
  </ul>
</div>
</>)}
    </>
  )
}

export default ProductDetails