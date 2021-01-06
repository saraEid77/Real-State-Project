import React, { Component  } from 'react';
import { Row , Col, Container,Button } from 'react-bootstrap';


class Section4 extends Component {

    
    render() {
        return (
            <div className="section4 py-5 text-center">
                <Container>
                  <Row  xs={1} md={2}>
                      <Col >
                         <h2 >Find Best Place For Living</h2>
                         <p>Spend vacations in best hotels and resorts find the great place of your
                            choice using different searching options.</p>
                         
                      </Col>
                      <Col className="mt-5">    
                      <Button className="mt-3" variant="success">Get Started</Button>
                      </Col>
                  </Row>
                
                </Container>
            </div>
        )
    }
}
export default Section4;



