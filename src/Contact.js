import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Alert from 'react-bootstrap/Alert'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneVolume,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [subject,setSubject]=useState('');
    const [body,setBody]=useState('');
    const [isSending,setIsSending]=useState(false);
    const [success,setSuccess]=useState(false);


    const msg={name,email,phone,subject,body};

    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsSending(true);
        send(
            'service_kx6c1z6',
            'template_saklpao',
             msg,
            'user_TsrpkLNv06RgLvsziyW4c'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              if (response.status===200) {
                setIsSending(false);
                setSuccess(true);
                setName('');setEmail('');setPhone('');setSubject('');setBody('');
              }
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
    }
    return ( 
        <>
           <div className="container edu left-contact-detail" id="skill">
              <div className="row skill-head-text">
                  <div className="col-12">
                    <h2><u>Contact</u></h2>
                </div>               
             </div>
             <div className="row">
                 <div className="col-md-6">
                     <div className="contact-info">
                         <h3>Contact Info</h3>
                     </div>
                     <p>
                         Thank you very much for visiting my website. If you have any querie, please feel free to send me the message. I will try to get back to you as soon as possible.
                    </p>
                     
                     <div className="row contact-row-address">
                         <div className="col-md-2">
                            <FontAwesomeIcon 
                              icon={faMapMarkerAlt} 
                              color="#fec608"
                              size="2x"
                            />
                         </div>
                         <div className="col-md-10">
                              <strong>Permanent :</strong>  Kash Naogaon, Naogaon Sadar. <br />
                              <strong>Present   :</strong>Mohisbathan, Rajpara, Rajshahi.
                         </div>
                     </div>
                     <div className="row contact-row-address">
                         <div className="col-md-2">
                            <FontAwesomeIcon 
                              icon={faPhoneVolume} 
                              color="#fec608"
                              size="2x"
                            />
                         </div>
                         <div className="col-md-10">
                              +880-1799427731 <br />
                              +880-1517316752
                         </div>
                     </div>
                     <div className="row contact-row-address">
                         <div className="col-md-2">
                            <FontAwesomeIcon 
                              icon={faEnvelope} 
                              color="#fec608"
                              size="2x"
                            />
                         </div>
                         <div className="col-md-10">
                              raja.mamunur@gmail.com <br />raja.mamunur@yahoo.com 
                         </div>
                     </div>
                 </div>
                
                 <div className="col-md-6">
                      <div className="contact-info">
                         <h3>SEND MESSAGE</h3>
                      </div>
                      <div className="row">
                          <div className="col-md-12">
                          <Form  onSubmit={handleSubmit} className="contact-email-form">
                              <Form.Group controlId="formBasicEmail">
                                 <Form.Control 
                                     type="text" 
                                     placeholder="Enter Your Name" 
                                     required
                                     value={name}
                                     onChange={(e)=>setName(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group controlId="formBasicEmail">
                                 <Form.Control 
                                 type="email"
                                  placeholder="Enter email" 
                                  required
                                  value={email}
                                  onChange={(e)=>setEmail(e.target.value)}
                                  />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                 <Form.Control 
                                 type="text"
                                  placeholder="Enter Your Phone Number" 
                                  required
                                  value={phone}
                                  onChange={(e)=>setPhone(e.target.value)}
                                  />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                 <Form.Control 
                                 type="text"
                                  placeholder="Enter Subject" 
                                  required
                                  value={subject}
                                  onChange={(e)=>setSubject(e.target.value)}
                                  />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">                              
                                 <Form.Control 
                                     as="textarea" 
                                     rows={3}
                                     value={body} 
                                     required
                                     placeholder="Enter Your Message" 
                                     onChange={(e)=>setBody(e.target.value)}
                                     />
                                </Form.Group>                                                        
                                  {!isSending && <Button variant="primary" type="submit">Submit</Button>}
                                  {isSending && <Button variant="warning" disabled>Sending.............</Button>}
                              </Form>
                              {/* {isSending && <h2>Sending..................</h2>} */}
                               {success && <Alert variant='success'>
                                     Message Sent Successfully. Thank for your Message. I will get back to you as soon As possible.
                               </Alert>}
                          </div>
                      </div>
                     
                 </div>
             </div>

           </div>
        </>
     );
}
 
export default Contact;