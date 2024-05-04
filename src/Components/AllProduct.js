import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductComponents from './ProductComponents';
import { allProducts } from '../Redux/actions/product-action';
import axios from 'axios';
import { useEffect } from 'react';

const AllProduct = () => {
  const products = useSelector((state)=>state);

  const dispatch = useDispatch();

  
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const result = await axios.get('https://fakestoreapi.com/products');
       // console.log(result.data); 
        dispatch(allProducts(result.data))
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, []);

  console.log("log store: ", products)
  return (
    <div style={{margin:"10px"}}>
      <ProductComponents/>
    </div>
  )
}

export default AllProduct