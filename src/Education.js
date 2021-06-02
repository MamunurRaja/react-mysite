
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import derby from './images/derby.png';
import homes from './images/homes.jpg';
import saptashri from './images/saptashri.jpg';

const Education = () => {
    return ( 
        <>  
            <div className="container edu">
              <div className="row skill-head-text">
                <div className="col-md-12">
                    <h2><u>Education</u></h2>
                </div>               
            </div>
              <div className="row edu-info">
                  <div className="col-xs-12 col-sm-12 col-md-4 ">
                  <a href="https://www.derby.ac.uk/" target="_blank">
                  <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={derby} />
                            <Card.Body>
                                <Card.Title>University of Derby, UK</Card.Title>
                                    <Card.Text>
                                        BSc(Hons) Information Technology.
                                        <br />
                                  </Card.Text>
                            </Card.Body>
                    </Card></a>
                 </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 edu-card">
                    <a href="https://www.drgrahamshomes.net/" target="_blank">
                  <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={homes} height="200" />
                            <Card.Body>
                                <Card.Title>Dr. Grahams Homes, Darjeeling, India</Card.Title>
                                    <Card.Text>
                                    Indian School Certificate. 
                                    <br />
                                  </Card.Text>
                            </Card.Body>
                    </Card></a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 edu-card">
                  <a href="https://www.saptashrikalimpong.com/" target="_blank">
                  <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={saptashri} height="200px"/>
                            <Card.Body>
                                <Card.Title>Saptashri Gyampeeth, Darjeeling, India</Card.Title>
                                    <Card.Text>
                                    Indian Certificate Of Secondary Education.
                                  </Card.Text>
                            </Card.Body>
                    </Card></a>
                  </div>
              </div>
          </div>
        </>
     );
}
 
export default Education;