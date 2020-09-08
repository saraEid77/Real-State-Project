import React from 'react';
import { Row , Col, Container } from 'react-bootstrap';
import photo1 from '../assets/images/Untitled1.png';
import icon1 from '../assets/images/work.svg';
import icon2 from '../assets/images/Group 1693.svg';
import icon3 from '../assets/images/24-hours.svg';


const section2 = () => {
    return (
      <div className="section2 py-5">
        <Container className=" py-5"
                            data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic" >
            <Row xs={1} md={2}>
                    <Col>
                      <div className="leftSide">
                        <img
                            className="d-block "
                            src={photo1}
                            alt="First slide"
                            />
                       </div>
                    </Col>
                    <Col className=" pl-5">
                      <Row> <h5 className="mb-5"><b>Get Work Done & Grow Your Business Faster On Website</b></h5></Row>
                       <Row className="mb-3 "> 
                            <img 
                            className="d-block h-6 mr-2 "
                            src={icon1}
                            alt="icon1"
                            />
                            <h3 >Hire The Best With Trust</h3>
                            <p className="text-opacity-100 text-xs">Post your job to get proposals, evaluate freelancers and agencies profiles, reviews delivered projects,
                         and check client feedback for hiring the best to depend on for getting the job done</p>
                         </Row>
                         <Row className="mb-3"> 
                            <img 
                            className="d-block h-6 mr-2 "
                            src={icon2}
                            alt="icon2"
                            />
                            <h3 >Protected Payment</h3>
                           <p className="text-opacity-50 text-xs">Only pay for the work you like. Your payment is only released when you are pleased and approve the work.</p>
                         </Row>
                         <Row> 
                         
                            <img 
                            className="d-block h-6 mr-2 "
                            src={icon3}
                            alt="icon3"
                            />
                            <h3 >We are always here, 24/7</h3>
                            <p className="text-opacity-50 text-xs">At any time we are just a click away to help, support, or resolve any issue.</p>
                         </Row>
                         
                    </Col>
                    
                </Row>
             
        </Container>
        </div>
    )
}

export default section2

