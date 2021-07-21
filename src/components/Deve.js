import React from 'react'
import '../App.css'
// import {Row,Col} from 'reactstrap'
import Blog from './Blog'
import {FaFacebookSquare,FaInstagramSquare,FaSnapchat,FaTwitter,FaLinkedin,FaFlickr,FaSearch }  from 'react-icons/fa';

const Deve = () => {
    return (
        <div className="card p-3">
        <div className="row gy-5 left_div__blog">
        <div className="col-12 bg-dark about_me_div shadow" >
          
          
            <img src="/Images/avatargirl.jpg" alt="Jane" style={{color:"black" ,width:"100%"}} />
            <div className="w3-container w3-black" >
              <h4 style={{color:"white" }}>My Name</h4>
              <p style={{color:"white"}}>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
            </div>
          
          </div>
          <div>
          </div>
          </div>
          <div className=" popular_post ">
          <div className="right_div__title py-4 pl-2 ">
              <h2 style={{backgroundColor:"black" ,color:"white"}}>Popular Posts</h2>
          </div>
          <div className="card p-3">
          <div className="right_sub__div shadow">
              <div className="row ">
                  <div className="col-3  popular_post__img1 py-2 pl-2">
                  <img src="./Images/avatarSmoke.jpg"   alt="avatarSmoke" style={{width:"100%"}}/>
                  </div>
                  <div className="col-9">
                      <h3>Denim</h3>
                      <p className="text-capitalize">Sed mattis nunc</p>
                  </div>
              </div>
              <div className="row ">
                  <div className="col-3  popular_post__img2 py-2 pl-2">
                  <img src="./Images/bandmember.jpg"   alt="bandMemeber" style={{width:"100%"}}/>
                  </div>
                  <div className="col-9">
                      <h3>Sweaters</h3>
                      <p className="text-capitalize">Praes tinci sed</p>
                  </div>
              </div>
              
              <div className="row ">
                  <div className="col-3  popular_post__img3 py-2 pl-2">
                  <img src="./Images/workshop.jpg"   alt="workshop"style={{width:"100%"}}/>
                  </div>
                  <div className="col-9">
                      <h3>Workshop</h3>
                      <p className="text-capitalize">Ultricies congue</p>
                  </div>
              </div>
              <div className="row ">
                  <div className="col-3  popular_post__img4 py-2 pl-2">
                  <img src="./Images/avatarSmoke.jpg"   alt="avatarSmoke" style={{width:"100%"}}/>
                  </div>
                  <div className="col-9">
                      <h3>Trends</h3>
                      <p className="text-capitalize">Lorem ipsum dipsum</p>
                  </div>
              </div>
          </div>
      </div>
      </div>
      <div className="card p-3">
      <div className=" right div post">
      <div className="right div title py-4 pl-2 ">
          <h2 style={{backgroundColor:"black" ,color:"white"}}>Advertise</h2>
      </div>
      <div className="right sub div ">
          <div className="advertise_img bg-light shadow">
              <p>Ads goes here</p>
          </div>
      </div>
  </div>
      
      </div>
      <div className="card p-3">
      <div className=" right">
      <div className="right py-4 pl-2 ">
          <h2 style={{backgroundColor:"black" ,color:"white"}}>Tags</h2>
      </div> 
      
      <div className="tags_main right_sub__div">
                                  
                                  <a href="#" className="badge shadow text-capitalize" style={{backgroundColor:"black"}}> Fashion</a>
                                  <a href="#" className="badge shadow text-capitalize"  style={{color:"black"}}> New York</a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> London </a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> Hats </a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> Norway </a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> Sweaters </a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> Ideas </a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> Deals</a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> Accessories </a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> Accessories </a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}>News </a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> Clothing</a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> Shoping </a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> jeans </a>
                                  <a href="#" className="badge shadow text-capitalize" style={{color:"black"}}> trends </a>




</div>                        

</div>


      </div>
      

      <div className="card p-3">
      <div className=" right_div_post">
      <div className="right_div__title py-4 pl-2 ">
          <h2 style={{backgroundColor:"black" ,color:"white"}}>Inspiration</h2>
      </div>
      
      <div className="right_sub__div">
          <div className="row gx-3">
              <div className="col-6">
                  <figure>
                      <img src="/Images/jeans.jpg" alt="Jeans" style={{width:"100%"}} className="img-fluid shadow"/>
                  </figure>
              </div>
              <div className="col-6">
                  <figure>
                      <img src="/Images/avatar_hat.jpg" alt="Men in Hats" style={{width:"100%"}} className="img-fluid shadow"/>
                  </figure>
              </div>
              <div className="col-6">
                  <figure>
                      <img src="/Images/team1.jpg" alt="Jeans" style={{width:"100%"}} className="img-fluid shadow"/>
                  </figure>
              </div>
              <div className="col-6">
                  <figure>
                      <img src="/Images/team4.jpg" alt="Jeans" style={{width:"100%"}} className="img-fluid shadow"/>
                  </figure>
              </div>
          </div>
      </div>
  </div>
  




      
      </div>

      <div className="card p-3">
      <div className=" right_div_post">
            <div className="right_div__title py-4 pl-2 ">
                <h2 style={{backgroundColor:"black" ,color:"white"}}>Follow Me</h2>
            </div>
            <div className="card p-3">
            <ul className="d-flex justify-content-around">
            

            <a href="#" style={{color:"black"}}>
            <FaFacebookSquare />
            </a>
            
            <a href="#" style={{color:"black"}}> 
            <FaInstagramSquare className="instagram"/>
            </a> 
           <a href="#" style={{color:"black"}}> 
           <FaSnapchat className="snapchatt"/>
           </a> 
        
           <a href="#" style={{color:"black"}}>
           <FaFlickr className="flickr"/>
           </a>
        
           <a href="#" style={{color:"black"}}> 
           <FaTwitter className="twitter"/>
           </a>
        
           <a href="#" style={{color:"black"}}> 
           <FaLinkedin  className="linkedin"/>
           </a>
          </ul>
           </div>
            </div>
            </div>
            <div className="card p-3">

          <div className=" right_div_post">
            <div className="right_div__title py-4 pl-2 ">
                <h2 style={{backgroundColor:"black" ,color:"white"}}>Subscribe</h2>
            </div>
            
            <div className="right_sub__div">
                <form>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Enter your e-mail below and get notified on the latest blog posts.</label>
                        <input type="email" className="form-control mt-2" id="exampleFormControlInput1"/>
                    </div>
                    <div className="col-12">
                        <button className="subs_btn d-block" style={{backgroundColor:"orange" ,width:"100%"}} type="submit">Subscribe</button>
                    </div>
                </form>
            <div>
        </div>
</div>

   </div>

</div>

</div>
        
    
            
    
        
    )
}
export default Deve
