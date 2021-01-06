import React, { Component  } from 'react';
import { Row , Col, Container  ,Button } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';

// import icons
import { FaMailBulk ,FaClock} from 'react-icons/fa';



class Section8 extends Component {

    
    render() {
        return (
            <div className="section8 py-5">
                <Container>
                  <Row xs={1} md={2}>
                      <Col >
                         <strong> Contact Us</strong>
                         <h1>Get in Touch</h1>
                         <p>Shina Real Estate brings wide range of choice, steadily updated property list and market trend for you to figure out your right decision.It is a premium WordPress
                              theme for real estate where modern aesthetics are combined with tasteful simplicity.</p>
                         <div className="contactIcons"><strong><FaPhoneAlt/></strong><span>Call us 1-800-555-1234</span></div>
                         <div className="contactIcons"><strong><FaMailBulk/></strong><span>info@shinarealestate.com</span></div>
                         <div className="contactIcons"><strong><FaClock/></strong><span>Open House on the 24th, – 12 mid day to 5 pm.</span></div>
                         <Button className="mt-3" variant="success">Get Started</Button>
                      </Col>
                      <Col className="mt-5">    
                         <iframe  title="map" width="100%" height="100%" frameborder="0"  allowfullscreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6888.079575421472!2d31.7682177435265!3d30.321386090142397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f80777db467745%3A0xf9ed7878e236de5a!2sHulk+Gym!5e0!3m2!1sar!2seg!4v1557781313988!5m2!1sar!2seg" ></iframe>
                      </Col>
                  </Row>
                
                </Container>
            </div>
        )
    }
}
export default Section8;



