import React from 'react';
import { Button ,Badge ,Carousel ,Row , Col} from 'react-bootstrap';
import woman from '../assets/images/woman.png';
import woman2 from '../assets/images/photo-1.png';
import man from '../assets/images/photo.png';
import star from '../assets/images/Path1901.svg';
import rightArrow from '../assets/images/271228.svg'


const section1 = () => {

    return (
        <div className=" bg-white section1">

           <Carousel className="">
           <Carousel.Item>
              <Carousel.Caption>
                  <h3 className="mb-4"
                   data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500">First Title, 2nd Tilte</h3>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure .</p>
                  <Button variant="primary">Get Started</Button> 
                </Carousel.Caption>
                <div className="rightSection"> 
                <Row >
                    <Col className="stars" >
                      <img className="star"    src={star}></img>
                      <img className="star"  src={star}></img>
                      <img className="star"  src={star}></img>
                      <img className="star"  src={star}></img>
                      <img className="star "   src={star}></img>  
                      <h6 className="mt-1 stars-Title" >Sara Eid</h6>
                    </Col>
                    
                  </Row>
                  <div className="caruselBackground  ">
                  <img style={{float:"right" ,paddingRight:"10%"}}
                    className="d-block h-64 "
                    src={woman}
                    alt="First slide"
                  />
                  </div>
                </div>
              </Carousel.Item>


              <Carousel.Item>
              <Carousel.Caption>
                  <h3 className="mb-4"
                   data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500">First Title, 2nd Tilte</h3>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure .</p>
                  <Button variant="primary">Get Started</Button> 
                </Carousel.Caption>
                <div> 
                <Row >
                    <Col className="stars" >
                    <img classNam="star"  src={star}></img>
                    <img classNam="star"  src={star}></img>
                    <img classNam="star"  src={star}></img>
                    <img classNam="star"  src={star}></img>
                    <img classNam="star "  src={star}></img>
                    <h6 className="mt-1 stars-Title">Sara Eid</h6>
                  
                    </Col>
                  </Row>
                
                  <div className="caruselBackground  ">
                  <img style={{float:"right" ,paddingRight:"10%"}}
                    className="d-block h-64 "
                    src={man}
                    alt="First slide"
                  />
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>     
              <Carousel.Caption>
                  <h3 className="mb-4"
                   data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500">First Title, 2nd Tilte</h3>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure .</p>
                  <Button variant="primary">Get Started</Button> 
                </Carousel.Caption>
                <div>
                <Row >
                    <Col className="stars" >
                    <img classNam="star"  src={star}></img>
                    <img classNam="star"  src={star}></img>
                    <img classNam="star"  src={star}></img>
                    <img classNam="star"  src={star}></img>
                    <img classNam="star "   src={star}></img>
                    <h6 className="mt-1 stars-Title">Sara Eid</h6>
                  
                    </Col>
                  </Row>
    
                  <div className="caruselBackground  ">
                  <img style={{float:"right" ,paddingRight:"10%"}}
                    className="d-block h-64 "
                    src={woman2}
                    alt="First slide"
                  />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
       
        
        </div>
    )
}

export default section1
