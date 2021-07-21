import React from 'react';



/**
* @author
* @function 
**/

const BlogPost = (props) => {
  return(
    <div className="container-fluid ">
    <div className="row ">
    <div className="col-lg-8 col-md-11 col-11 mx-auto">
                    <div className="row gy-5 ">
                        <div className="col-12 card p-4 shadow blog_left__div">
                            <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                                 <h1 className="text-uppercase">TITLE HEADING</h1>
                                <p className="blog_title"> Title description,<span className="font-weight-bold"></span>May 2, 2016 </p>
                            </div>
                            <figure className="right_side_img mb-5">
                                <img src="/Images/girlHat.jpg" className="img-fluid shadow" style={{width:"100%"}}/>
                            </figure>
                            <p><span className="font-weight-bold">More Hats!</span> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                            <p>
                               Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>
                            <div className="d-flex justify-content-between left_div_btns">
                                <div>
                                    <button className="left_div__like bg-dark" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
                                </div>
                                <div>
                                    <button className="left_div__reply bg-dark" >Replies <badge className="bg-white text-dark p-2">1</badge></button>
                                </div>
                            </div> 
                            <div className="col-12 card p-4 shadow blog_left__div">
                            
                            
                            <div className="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                    <div className=" reply_img mx-2 align-self-center ">
                                         <img src="/Images/avatarSmoke.jpg"  alt="man hat" style={{width:"100px"}} className="img-fluid shadow" />
                                     </div>
                                     <div className="reply_text__left">
                                        <p className="blog_title "> George<span className="font-weight-bold"> George </span> May 3, 2015, 6:32 PM</p>
                                         <p>Great blog post! Following</p>
                                    </div>
                                </div>
                            
                            </div>
                       </div>
                       <div className="col-12 card p-4 shadow blog left div">
                            <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                                <h1 className="text-uppercase">Title Heading</h1>
                                <p className="blog_title"> <span className="font-weight-bold"> Title description, </span> April 23, 2016</p>
                            </div>
                            <figure className="right_side_img mb-5">
                                <img src="/Images/manHat.jpg" className="img-fluid shadow"/>
                            </figure>
                            <p><span className="font-weight-bold">Hats!</span>The trend this summer is hats for men!</p>
                            <p>
                            Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
            mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                            </p>
                            <div className="d-flex justify-content-between left_div_btns">
                                <div>
                                    <button className="left_div__like bg-dark" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
                                </div>
                                <div>
                                    <button className="left_div__reply bg-dark">Replies <badge className="bg-white text-dark p-2">2</badge></button>
                                </div>
                            </div>
                            </div>
                        <div className="col-12 card p-4 shadow blog_left__div">
                            <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                                <h1 className="text-uppercase">Title Heading</h1>
                                <p className="blog_title"> <span className="font-weight-bold"> Title description, </span> </p>
                            </div>
                            <figure className="right_side_img mb-5">
                                <img src="/Images/runway.jpg" className="img-fluid shadow"/>
                            </figure>
                            <p><span className="font-weight-bold">Dont miss!</span>The runway in New York City this weekend is gonna be legendary!</p>
                            <p>
                            Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
            mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                            </p>
                            <div className="d-flex justify-content-between left_div_btns">
                                <div>
                                    <button className="left div bg-dark" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
                                </div>
                                <div>
                                    <button className="left div bg-dark">Replies <badge className="bg-white text-dark p-2">3</badge></button>
                                </div>
                            </div>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                   </div> 
                   
                      
                        
                        
                       
   )

 }

export default BlogPost
















