import React from 'react';
import { Row , Col, Container, Dropdown ,Button} from 'react-bootstrap';


const Section2 = () => {
    return (
      <Container className="section2 py-5">
        <div className="sale"> Sale</div>
       
            <Row xs={1} sm={2} md={2} lg={4}>
                    <Col>
                    <p>COUNTRY</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Any
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                    </Col>
                    <Col>
                    <p>PRICE FROM</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Any
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                    </Col>
                    <Col>
                    <p>PRICE TO</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Any
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                    </Col>
                    <Col>
                    <p>STATUS</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Any
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                    </Col>
                    
            </Row>
            <Row xs={1} sm={2} md={2} lg={4}>
                    <Col>
                    <p>BEDROOMS MIN</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Any
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                    </Col>
                    <Col>
                    <p>BEDROOMS MAX</p>
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Any
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                    </Col>
                    <Col>
                    <p>BATHROOMS</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              Any
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                    </Col>
                    <Col>
                    <p style={{color:"transparent"}}>.</p>
                    <Button variant="success" id="section2Button">Read More</Button>
                    </Col>
                    
            </Row>
            
        </Container>
    )
}

export default Section2

