import React from 'react'
import { Link } from 'react-router-dom'


const Headers = () => {
  return (
   <>
   {/* //<nav className="navbar bg-primary" data-bs-theme="dark"></nav> 
    className="navbar" style="background-color: #e3f2fd;"*/}

    <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#e3f2fd"}}>
  <div className="container-fluid">
    <p className="navbar-brand"><Link exact to="/" style={{textDecorationLine:"none"}}>Redux E-Com</Link></p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

   </>
  )
}

export default Headers


