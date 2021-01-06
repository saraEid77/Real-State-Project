import React, { Component  } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row , Col, Container } from 'react-bootstrap';
// importimages
import company1 from '../assets/images/1.png'
import company2 from '../assets/images/2.png'
import company3 from '../assets/images/3.png'
import company4 from '../assets/images/4.png'
import company5 from '../assets/images/5.png'



const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};


class Section7 extends Component {

    render() {
        return (
            <div className="section7">
                <Container>
                      <Carousel responsive={responsive}  infinite={true}
                              autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={3000} keyBoardControl={true} >
                                    <Row >
                                       <Col><img src={company1} alt="img"></img></Col> 
                                       <Col><img src={company2} alt="img" ></img></Col> 
                                       <Col><img src={company3} alt="img" ></img></Col> 
                                       <Col><img src={company4} alt="img"></img></Col> 
                                       <Col><img src={company5} alt="img"></img></Col> 
                                    </Row>
                                  
                              </Carousel>
                </Container>
            </div>
        )
    }
}
export default Section7;



