import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaSnapchat,FaTwitter,FaLinkedin,FaFlickr,FaSearch }  from 'react-icons/fa';

const NavBar = () => {
    return (
        <div style={{ width:"100%" , backgroundColor:"white"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
  <div className="container-fluid">
    
    <button className="navbar-toggler bg-primary" type="button " data-bs-toggle="collapse " data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0" >
      <li style={{color:"white"}}>

      <a href="#" style={{color:"white"}}><FaFacebookSquare /></a>
      </li>
      <li>
   <a href="#" style={{color:"white"}}> 
  <FaInstagramSquare className="instagram"/>
   </a> 
  </li>
  
  
  <li>
  <a href="#" style={{color:"white"}}> 
  <FaSnapchat className="snapchatt"/>
  </a> 
  </li>
  
  
   
  <li>
  <a href="#" style={{color:"white"}}>
  <FaFlickr className="flickr"/>
  </a>
  </li>
  
  
  
  <li>
  <a href="#" style={{color:"white"}}> 
  <FaTwitter className="twitter"/>
  </a>
  </li>
  
  
  
  <li>
  <a href="#" style={{color:"white"}}> 
  <FaLinkedin  className="linkedin"/>
  </a>
  </li>
      
        
        
        
      </ul>
      <div className="d-flex">
    
    
<FaSearch className="search" style={{color:"white"}} />
 
</div>
 
    </div>
  </div>
</nav>
<header className="blogHeader" style={{ width:"100%" , backgroundColor:"white"}} >
<div>
     <h1 className="blogTitle" style={{fontSize:"30px" ,color:"black",textAlign:"center" ,width:"100%"}}><b>JANE BLOGLIFE</b></h1>
      <h6  className="justify-content-sm-center"style={{fontSize:"20px" ,textAlign:"center" ,display:"flex" ,justifyContent:"start-flex"}}>Welcome to the blog of,<span className="justify-content-sm-center" style={{backgroundColor:"black",textAlign:"center" ,color:"white",fontStyle: "italic",fontSize:"20px",width:"100px",height:"30px"  }}>Jane's world</span></h6>
      </div>
      </header>
      <div className="HomeContainer" >
        
        
        
        
          <figure className="position-relative">
         
        
            <img className="img-fluid" src="./Images/jane.jpg" alt="Fashion Blog" style={{width:"145%",height:"500px" }}/>
            
            <h3 className="homeH" style={{color:"white",position:"absolute",bottom:"20rem",fontSize:"40"}} >Jane's</h3>
              <h1 className="fashionBlog"style={{ color:"white",position:"absolute",bottom:"17rem"}}><b>FASHION BLOG</b></h1><br></br>
            
            <div className="homeHeading">
              <h6><button className="button"style={{color:"grey",position:"absolute",bottom:"12rem",fontSize:"27px"}}>SUBSCRIBE</button></h6>
            </div>
      </figure>
        
        </div>
        </div>
    )
}

export default NavBar
