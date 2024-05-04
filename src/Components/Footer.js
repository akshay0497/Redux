import React from 'react'

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#e3f2fd' }}>
       {/* <nav class="navbar navbar-expand-lg " style={{backgroundColor: "#e3f2fd"}}> */}
  {/* <div class="container-fluid"> */}
  <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <p style={{ margin: '0 auto' }}>@Akshay Kumar Gupta❤️</p>
        </div>
        <div className="container-fluid">
        <p style={{ margin: '0 auto' }}>All rights reserved @ 2024</p>
        </div>
      </nav>
  {/* </div> */}
{/* // </nav> */}
   </footer>
  )
}

export default Footer