
import React, { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Enroll from '../Enroll';
import EnrollBox from './EnrollBox';
import { Link } from 'react-router-dom';
import ApplyNowModal from '../../components/Modal/ApplyNowModal';


const FeatureList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container style={{position:'relative',top:'1rem'}}>
      <Link>
  <Button
    className="Enquirybutton"
    variant="contained"
    style={{ backgroundColor: "#66023b", color: 'white',position:'relative',bottom:"12.2rem",right:'1.5rem',width: "110px", height: "40px", }}
    onClick={openModal}
    // Updated z-index value
  >
    Apply Now
  </Button>
</Link>

<ApplyNowModal open={isModalOpen} handleClose={closeModal} />
      <Row  >
        <Col md={6} sm={3}  >
          <div className="feature-tileleft">
            <ul>
            
                <div className="align hidden-xs-down">
                  <div className="icon-wrapper">
                    <img src="https://smartcliff.in/assets/images/training-by-industry.png" alt="Training by Industry" /><span style={{fontSize:"1rem",position:'relative',left:'1rem',fontWeight:'600',color: "#f2775e"}}>Training by Industry<br/> <span style={{color:'black',position:'relative',left:'3.5rem',bottom:'1rem '}}>Expert</span></span>
                  </div>
                </div>
               
             
            </ul>
          </div>
        </Col>
        <Col md={6} sm={6} style={{position:'relative',right:'15rem'}}>
          <div className="feature-tileleft">
            <ul>
            
                <div className="align hidden-xs-down">
                  <div className="icon-wrapper">
                    <img src="https://smartcliff.in/assets/images/depth-training.png" alt="In-depth Practical Training" /><span style={{fontSize:"1rem",position:'relative',left:'1rem',fontWeight:'600',color: "#f2775e"}}>In Depth<br/><span style={{color:'black',position:'relative',left:'3.5rem',bottom:'1rem '}}>Practical Training</span></span>
                  </div>
                </div>
                
            </ul>
          </div>
        </Col>
        <Col md={6} sm={6} >
          <div className="feature-tileleft">
            <ul>
            
                <div className="align hidden-xs-down">
                  <div className="icon-wrapper">
                    <img src="https://smartcliff.in/assets/images/on-job-project.png" alt="In-depth Practical Training" /><span style={{fontSize:"1rem",position:'relative',left:'1rem',fontWeight:'600',color: "#f2775e"}}>ON the Job Project<br/> <span style={{color:'black',position:'relative',left:'3.5rem',bottom:'1rem '}}>Training</span></span>
                  </div>
                </div>
               
            </ul>
          </div>
        </Col>
        <Col md={6} sm={6} style={{position:'relative',right:'15rem'}}>
          <div className="feature-tileleft">
            <ul>
            
                <div className="align hidden-xs-down">
                  <div className="icon-wrapper">
                    <img src="https://smartcliff.in/assets/images/duration.png" alt="In-depth Practical Training" /><span style={{fontSize:"1rem",position:'relative',left:'1rem',fontWeight:'600',color: "#f2775e"}}>Duration<br/><span style={{color:'black',position:'relative',left:'3.5rem',bottom:'1rem '}}>2 Years</span></span>
                  </div>
                </div>
               
              
            </ul>
          </div>
        </Col>
        <Col md={6} sm={6} >
          <div className="feature-tileleft">
            <ul>
            
                <div className="align hidden-xs-down">
                  <div className="icon-wrapper">
                    <img src="https://smartcliff.in/assets/images/online-class.png" alt="In-depth Practical Training" /><span style={{fontSize:"1rem",position:'relative',left:'1rem',fontWeight:'600',color: "#f2775e"}}>Classroom & Online<br/> <span style={{color:'black',position:'relative',left:'3.5rem',bottom:'1rem '}}>Expert</span></span>
                  </div>
                </div>
                
              
            </ul>
          </div>
        </Col>
        <Col md={6} sm={6} style={{position:'relative',right:'15rem'}}>
          <div className="feature-tileleft">
            <ul>
            
                <div className="align hidden-xs-down">
                  <div className="icon-wrapper">
                    <img src="https://smartcliff.in/assets/images/self-assesment.png" alt="In-depth Practical Training" /><span style={{fontSize:"1rem",position:'relative',left:'1rem',fontWeight:'600',color: "#f2775e"}}>Self Assesment<br/><span style={{color:'black',position:'relative',left:'3.5rem',bottom:'1rem '}}>Expert</span></span>
                  </div>
                </div>
             
              
            </ul>
          </div>
        </Col><span> <EnrollBox/> </span>
        {/* Repeat the above structure for other columns */}
        {/* ... */}
      </Row>
    </Container>
  );
};

export default FeatureList;
