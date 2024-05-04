import React from 'react';
import { Button } from 'antd';
import Headers from './Components/Headers';
import Footer from './Components/Footer';
import AllProduct from './Components/AllProduct';
import ProductComponents from './Components/ProductComponents';
import ProductDetails from './Components/ProductDetails';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';

const App = () => (
  <>
  <Router>


  <div style={{backgroundColor:"#f5f5f4"}}>
  <Headers/>
  <Routes>
  <Route exact path='/' element={<AllProduct/>}/>
  {/* <Route path='/productCom' element={<ProductComponents/>}/> */}
  <Route path='/product/:productId' element={<ProductDetails/>}/>
  <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  <Footer/>
  </div>
  </Router>
  </>
);

export default App;