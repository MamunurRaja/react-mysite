

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Photo from './images/Photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedin,faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import MySkill from "./MySkill";
import Education from "./Education";


const Home = () => {
    const [index, setIndex] = useState(0);

     const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
     };

    return ( 
        <>
          <div className="container bioData">
          <div className="">
               <div className="row">
                 <div className="col-xs-12 col-sm-12 col-md-4" id="homeImage">
                   <img 
                     src={Photo}
                     alt="myPhoto" 
                   />
                   <div className="row btnCv">
                     <div className="col-md-12">
                     <a className="download_btn">
                         <span>Download Resume</span>
                     </a>
                            
                     </div>
                   </div>
                         
                 </div>
                 <div className="col-xs-12 col-sm-12 col-md-8 myself">
                    <h1>HI I'M <span className="myName">MAMUNUR RAJA</span> </h1>
                    <h4>Web Designer and Web Developer</h4>
                    <p>My name is Bernard Shelly. I am 32 years old. Lorem ipsum dolor sit amet, consectetur ascing elits, sed do eiusmod tempor incidunt ut labore et dolore mafgna aliqua. Ut enim ad mini vniam quis nerci, tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autes irure dolor in reprehenderit in etrs voluptate velit esse cillum dolore eu fugiat nulla pariatur. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                     <div className="row personal-info">
                       <div className="col-4">
                         <ul>
                           <li><a href="#">Age</a></li>
                           <li><a href="#">Nationality</a></li>
                           <li><a href="#">Address</a></li>
                           <li><a href="#">Phone</a></li>
                           <li><a href="#">Fax</a></li>
                           <li><a href="#">Email</a></li>
                           <li><a href="#">Website</a></li>
                          </ul>

                        
                       </div>
                       <div className="col-8">
                       <ul>
                          <li><a href="#">33</a></li>
                          <li><a href="#">Bangladeshi</a></li>
                          <li><a href="#">93 Mohisbathan, Rajpara, Rajshahi</a></li>
                          <li><a href="#">+88 01799427731</a></li>
                          <li><a href="#">+88 01799427731</a></li>
                          <li><a href="#">raja.mamunur@gmail.com</a></li>
                          <li><a href="#">www.mamunur.com</a></li>
                          </ul>
                       </div>
                     </div>
                     <div className="iconStyle">
                        <span> 
                          <FontAwesomeIcon 
                              icon={faFacebook} 
                              color="#fec608"
                              size="2x"
                          />
                        </span>
                        <span> 
                          <FontAwesomeIcon 
                              icon={faLinkedin} 
                              color="#fec608"
                              size="2x"
                          />
                        </span>
                        <span> 
                          <FontAwesomeIcon 
                              icon={faTwitterSquare} 
                              color="#fec608"
                              size="2x"
                          />
                        </span>
                     </div>
                     
                 </div>
               </div>
              
               
          </div>
          </div>
          <MySkill/>
          <Education/>
        </>
     );
}

 
export default Home;
