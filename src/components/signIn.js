import React from 'react'
import { Container ,Row , Col ,Form, Button} from 'react-bootstrap';
import formImg from '../assets/images/5e6f3f2a4b406cb30081cecd_welcome-bw-p-800.png';
import icon1 from '../assets/images/1077063.svg';
import icon2 from '../assets/images/3064197.svg';

const signIn = () => {
    return (
        <Container className="signIn mt-5 d-flex justify-content-between"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" >
            <Row >
                <Col md={6} xs={12}>
                    <img src={formImg} alt="img"></img>
                </Col>
                <Col md={6} xs={12}>
                <Form style={{height:"500px"}} >
                    <Form.Group  controlId="formBasicEmail">
                        <img className="icon" src={icon1} alt="img"></img>
                        <Form.Control className="formElement" type="email" placeholder="Your Name " />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <img className="icon" src={icon2} alt="img"></img>
                        <Form.Control className="formElement" type="password" placeholder="Your Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                    <img className="icon" src={icon2} alt="img"></img>
                        <Form.Control className="formElement" type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button className="formButton " variant="success" type="submit" style={{width:"100%"}}>
                            Create Account
                            </Button>
                        </Col>
                    
                         <Col>
                            <Button className="formButton" variant="success" type="submit" style={{width:"100%"}}>
                                Sign In
                            </Button>
                        </Col>
                    </Row>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default signIn
