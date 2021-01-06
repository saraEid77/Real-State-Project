import React, { Component , Fragment } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row , Col, Container ,Card } from 'react-bootstrap';
// importimages
import CardImg1 from '../assets/images/author.jpg'
import Icon1 from '../assets/images/Path 1902.svg'
import News1 from '../assets/images/news-1.jpg'
import News2 from '../assets/images/news-2.jpg'

// import icons
import {FaQuoteLeft ,FaStar ,FaStarHalfAlt} from 'react-icons/fa';


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


class Section6 extends Component {

  state1 = {
    loading: false,
    data: [{
        img:CardImg1,
        title: 'Jonathan Doe',
        text: 'March 03 ,2021  ',
        country:"New York",
        icon1:Icon1,       
    },
    {
        img:CardImg1,
        title: 'Jonathan Doe',
        text: 'March 03 ,2021  ',
        country:"New York",
        icon1:Icon1,
       
       
    },
    
],
    headline: []
}

state2 = {
  loading: false,
  data: [{
      img:CardImg1,
      title: 'Jonathan Doe',
      text: 'March 03 ,2021  ',
      country:"New York",
      icon1:Icon1,       
  },
  {
      img:CardImg1,
      title: 'Jonathan Doe',
      text: 'March 03 ,2021 ',
      country:"New York",
      icon1:Icon1,
     
     
  },
  
],
  headline: []
}

    render() {
        return (
            <div className="section6">
                <Container>
                
                {this.state1.loading
                    ? "loading..."
                    : <Row xs={1} md={2}>
                         <Col>
                              <div className=" py-5">
                                <strong>Testimonial</strong>
                                <h1>What Client Say</h1> 
                              </div>
                              <Carousel className="slider1" responsive={responsive} showDots={true} infinite={true}>
                              {this.state1.data.map((card, index) => {
                                  return (
                                    <Card   key={index} className="slider1 text-center ">
                                          <Card.Img variant="top" src={card.img} alt="img"/>
                                        <Card.Body  >
                                            <Card.Title>{card.title}</Card.Title>
                                            <FaQuoteLeft />
                                            <Card.Text > 
                                              <p>Fantastic Twp Bedroom Facing East In This Amazing Trump Place Doorman Building.
                                                 There Is A Large Kitchen, Washer And Dryer,…</p>
                                              <strong>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStarHalfAlt />
                                              </strong>
                                              <p>{card.text}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        
                                    </Card>
                                  )
                              })}
                              </Carousel>
                         </Col>
                         <Col className="slider2">
                             <div className=" py-5">
                                  <strong>Our Latest News</strong>
                                  <h1>Recent Blog Posts</h1> 
                              </div>
                              <Carousel  responsive={responsive} showDots={true} infinite={true}>
                              {this.state2.data.map((card, index) => {
                                  return (
                                    <Fragment >
                                      <Row >
                                         <Col md={5} >
                                              <img src={News1} alt="img"></img>
                                         </Col>
                                         <Col md={7}>
                                           <h5> <strong>Recources That We thought You may find Useful  </strong></h5>
                                           <p>Fantastic Twp Bedroom Facing East In This Amazing Trump Place Doorman Building.
                                                 There Is A Large Kitchen, Washer And Dryer,…</p>
                                         </Col>
                                      </Row>
                                      <Row className="mt-4">
                                      <Col md={5}>
                                              <img src={News2} alt="img"></img>
                                         </Col>
                                         <Col md={7}>
                                         <h5><strong>Recources That We thought You may find Useful  </strong></h5>
                                           <p>Fantastic Twp Bedroom Facing East In This Amazing Trump Place Doorman Building.
                                                 There Is A Large Kitchen, Washer And Dryer,…</p>
                                         </Col>
                                      </Row>
                                    </Fragment>
                                  )
                              })}
                              </Carousel>
                         </Col>
                    </Row>
                }
                </Container>
            </div>
        )
    }
}
export default Section6;



