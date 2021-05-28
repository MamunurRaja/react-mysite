import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Alert from 'react-bootstrap/Alert'

const Contact = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [subject,setSubject]=useState('');
    const [body,setBody]=useState('');
    const [isSending,setIsSending]=useState(false);
    const [success,setSuccess]=useState(false);


    const msg={name,email,subject,body};

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
                         There are many variations of passages of Lorem Ipsum available, but the et majori have suffered alteration in some form, by injected humour, Domised words which don't look even slightly believable. If you are going to use a pas of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                     <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>
                 </div>
                
                 <div className="col-md-6">
                      <div className="contact-info">
                         <h3>SEND MESSAGE</h3>
                      </div>
                      <div className="row">
                          <div className="col-md-12">
                          <Form  onSubmit={handleSubmit}>
                              <Form.Group controlId="formBasicEmail">
                                 <Form.Control 
                                     type="text" 
                                     placeholder="Enter Your Name" 
                                     value={name}
                                     onChange={(e)=>setName(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group controlId="formBasicEmail">
                                 <Form.Control 
                                 type="email"
                                  placeholder="Enter email" 
                                  value={email}
                                  onChange={(e)=>setEmail(e.target.value)}
                                  />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                 <Form.Control 
                                 type="text"
                                  placeholder="Enter Subject" 
                                  value={subject}
                                  onChange={(e)=>setSubject(e.target.value)}
                                  />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">                              
                                 <Form.Control 
                                     as="textarea" 
                                     rows={3}
                                     value={body} 
                                     placeholder="Enter Your Message" 
                                     onChange={(e)=>setBody(e.target.value)}
                                     />
                                </Form.Group>                                                        
                                  <Button variant="primary" type="submit">Submit</Button>
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