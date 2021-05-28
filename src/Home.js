

import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Photo from './images/Photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedin,faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import MySkill from "./MySkill";
import Education from "./Education";
import Spinner from 'react-bootstrap/Spinner'
import Contact from "./Contact";



const Home = () => {
    const [index, setIndex] = useState(0);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setTimeout(() => setIsLoading(false), 500);                  
    },[])

     const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
     };

    return ( 
        <>
        {isLoading && 
          <div className="load"><Spinner animation="border" size="m" variant="warning" /></div>
        }
         {!isLoading && <div className="container bioData">
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
                    <p>My name is Mamunur R Raja. I am 33 years old. I am an enthusiastic worker. 
                      I am honest and reliable. 
                      I feel that I have good communication skills and work well with people. 
                      I am good at taking direction from other people when needed, 
                      but I am also good at working under my own initiative when I need to. 
                      I consider myself to be polite and friendly. I am working as a softwate developer at SUN IT LTD, Rajshahi. I have been in this profession since more than 3 years. </p>
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

          </div>}
              {!isLoading && <MySkill/>}
             {!isLoading && <Education/>}
             {!isLoading && <Contact/>}
        </>
     );
}
export default Home;
