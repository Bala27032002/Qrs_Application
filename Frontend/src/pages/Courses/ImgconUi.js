import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import ApplyNowModal from '../../components/Modal/ApplyNowModal';

import ApplyNowModal from '../../components/Modal/ApplyNowModal';

const ImgconUi = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container mb-4 pb-4 mt-1'>
      <div className='row heading' style={{ textAlign: "center" }}>
        {/* <h3 style={{ fontFamily: "serif" }}><b>{props.heading}</b></h3> */}
      </div>
      <div className="container my-4">
        <div className="row justify-content-between">
          <div className="col-lg-5 pt-4 text-center" style={{  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}>
            <br />
            <h4 style={{ color: "black" , fontFamily: "serif",fontWeight: 700,color:'#66023b',position:'relative'}} className='pb-3'><b>{props.heading}</b></h4>
            <h2 style={{ fontFamily: "serif", fontSize: "20px" }}>{props.title}</h2><br />
            <Link ><button style={{ marginTop: "40px", width: "100px", height: "40px", fontFamily: "serif", background: '#f5d3e6', color: "black",position:'relative',left:'2rem' }} onClick={openModal}>Apply Now</button></Link>
            <ApplyNowModal  open={isModalOpen} handleClose={closeModal} />
          </div>
          <div className="col-lg-7" >
            <img src={props.imgsrc} style={{ height: "400px",width:'200px', boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }} className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgconUi;
