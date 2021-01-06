import React from 'react';
import { Button ,Carousel } from 'react-bootstrap';
import background1 from '../assets/images/back2.jpg';
import background2 from '../assets/images/back3.jpg';
import background3 from '../assets/images/back2.jpg';

const Section1 = () => {

    return (
        <div className="section1">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={background1}
                alt="First slide"
              />
              <Carousel.Caption   >
                <h2 data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic">Luxury <br></br> Residence here </h2>
                <p data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button variant="success">Read More</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={background2}
                alt="Third slide"
              />

              <Carousel.Caption>
              <h2 data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic">Luxury <br></br> Residence here </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button variant="success">Read More </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={background3}
                alt="Third slide"
              />

              <Carousel.Caption>
              <h2 data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic">Luxury <br></br> Residence here </h2>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                <Button variant="success">Read More</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
           
        </div>
    )
}

export default Section1
