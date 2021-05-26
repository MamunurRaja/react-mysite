import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const MySkill = () => {
    return ( 
        <>
        <div className="container skill">
            <div className="row skill-head-text">
                <div className="col-12">
                <h2><u>My Skill</u></h2>
                </div>               
            </div>
            <div className="row">
                 <div className="col-xs-12 col-sm-12 col-md-6" id="skill-info">
                    <h4>WEB DEVELOPMENT SKILLS</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text.</p>
                    <div className="skill-amount">
                        <div className="single-skill">
                               <h5>Laravel</h5>
                               <ProgressBar animated now={90} label={`${90}%`} />
                        </div>
                    </div>
                    <div className="skill-amount">
                        <div className="single-skill">
                               <h5>PHP & MYSQL</h5>
                               <ProgressBar animated now={90} label={`${90}%`} />
                        </div>
                    </div>
                 
                    <div className="skill-amount">
                        <div className="single-skill">
                               <h5>React JS</h5>
                               <ProgressBar animated now={50} label={`${50}%`} />
                        </div>
                    </div>                   
                 </div> 
                 <div className="col-xs-12 col-sm-12 col-md-6" id="skill-info">
                    <h4>WEB DESIGN SKILLS</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text.</p>
                    <div className="skill-amount">
                        <div className="single-skill">
                               <h5>HTML & CSS </h5>
                               <ProgressBar animated now={95} label={`${95}%`} />
                        </div>
                    </div>
                    
                    <div className="skill-amount">
                        <div className="single-skill">
                               <h5>CREATIVE DESIGN</h5>
                               <ProgressBar animated now={80} label={`${80}%`} />
                        </div>
                    </div>

                    <div className="skill-amount">
                        <div className="single-skill">
                               <h5>PHOTOSHOP</h5>
                               <ProgressBar animated now={50} label={`${50}%`} />
                        </div>
                    </div>
                            
                 </div>  
            </div>
            
        </div>
        </>
     );
}
 
export default MySkill;