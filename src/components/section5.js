import React from 'react'
import { Tabs, Tab, Container , Row,Col ,Button,Accordion,Card} from 'react-bootstrap';
import photo1 from '../assets/images/Untitled.png'
import photo2 from '../assets/images/2d3abda5-37f3-4d30-9396-a9804c4ba7dc.jpg'
import icon from '../assets/images/566015.svg'
import background from '../assets/images/Group1769.png'
const section5 = () => {
    return (
        <Container className="mb-5 section5">
        <div  style={{height:"auto" }}>
             <Col sm={12} >
                        <Tabs defaultActiveKey="home" className="outerTabs "   >
                            <Tab eventKey="home" title="If you're hiring">
                            <div className="tab-item-wrapper">
                                <Row>
                                   <Col md={6}>
                                     <h3><strong>Easily find quality matches</strong></h3>
                                     <p>But I must explain to you how all this mistaken idea of denouncing pleasure and 
                                         praising pain was born and I will give you a complete account of the system, 
                                         and expound the actual teachings .</p>
                                         <ul>
                                             <li><strong>But I must explain to you.</strong>
                                             Tell us about your project and the specific skills required. Learn how.</li>
                                             <li><strong>But I must explain to you how.</strong>
                                             But I must explain to you how all this mistaken idea of denouncing pleasure
                                              and praising pain was born and I will give you a complete account.</li>
                                             <li><strong>We send you a shortlist of likely candidates.</strong>
                                              But I must explain to you how all this mistaken idea
                                              of denouncing pleasure and praising pain was born and I will give you a complete account .</li>
                                              
                                         </ul>
                                   </Col>
                                   <Col md={6} data-aos="fade-down"
                                               data-aos-easing="linear"
                                               data-aos-duration="1500">
                                      <img src={photo1} style={{width:"280px"  ,marginLeft: "auto",  marginRight: "auto" }}></img>
                                   </Col>
                                </Row>
                            </div>
                            </Tab>

                            <Tab eventKey="profile" title="If you're working" >
                            <div className="tab-item-wrapper">
                            <Row>
                                   <Col md={6}>
                                     <h3><strong>Easily find quality matches</strong></h3>
                                     <p>But I must explain to you how all this mistaken idea of denouncing pleasure and 
                                         praising pain was born and I will give you a complete account of the system, 
                                         and expound the actual teachings .</p>
                                         <ul>
                                             <li><strong>But I must explain to you.</strong>
                                             Tell us about your project and the specific skills required. Learn how.</li>
                                             <li><strong>But I must explain to you how.</strong>
                                             But I must explain to you how all this mistaken idea of denouncing pleasure
                                              and praising pain was born and I will give you a complete account.</li>
                                             <li><strong>We send you a shortlist of likely candidates.</strong>
                                              But I must explain to you how all this mistaken idea
                                              of denouncing pleasure and praising pain was born and I will give you a complete account .</li>
                                              
                                         </ul>
                                   </Col>
                                   <Col md={6} data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="1500">
                                      <img src={photo2} style={{width:"280px"  ,marginLeft: "auto",  marginRight: "auto" }}></img>
                                   </Col>
                                </Row>
                            </div>
                            </Tab>
            
                            <Tab eventKey="contact" title="FAQs" >
                            <div className="tab-item-wrapper">
                                                    <Container >
                                                        <div style={{height:"auto" }}>
                                                            <Col sm={12} >
                                                                        <Tabs defaultActiveKey="home" id="innerTab" className="innerTabb mb-5" style={{textAlign:"center" }}>
                                                                            <Tab eventKey="home" title="ABOUT Mission" >
                                                                            <div className="tab-item-wrapper">
                                                                                <Row>
                                                                                    <Col className="mb-5 mt-5">
                                                                                    <h1>About Us</h1>
                                                                                    <Accordion defaultActiveKey="0">
                                                                                        <Card >
                                                                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                                                            But I must explain to you how all this mistaken?
                                                                                            <img src={icon} style={{width:"20px", height:"20px ", float:"right"}}></img>
                                                                                            </Accordion.Toggle>
                                                                                            <Accordion.Collapse eventKey="1">
                                                                                            <Card.Body>Anything you can do on a computer can be done through us.</Card.Body>
                                                                                            </Accordion.Collapse>
                                                                                        </Card>
                                                                                    </Accordion>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                            </Tab>

                                                                            <Tab eventKey="profile" title="ABOUT HIRING" >
                                                                            <div className="tab-item-wrapper">
                                                                               
                                                                            <Row>
                                                                                    <Col className="mb-5  mt-5" >
                                                                                    <h1>Lorem ipsum dolor sit amet</h1>
                                                                                    <Accordion  defaultActiveKey="0">
                                                                                        <Card>
                                                                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                                                            But I must explain to you how all this mistaken?
                                                                                            <img src={icon} style={{width:"20px", height:"20px ", float:"right"}}></img>
                                                                                            </Accordion.Toggle>
                                                                                            <Accordion.Collapse eventKey="1">
                                                                                            <Card.Body>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you.</Card.Body>
                                                                                            </Accordion.Collapse>
                                                                                        </Card>
                                                                                    </Accordion>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                            </Tab>
                                                            
                                                                            <Tab eventKey="contact" title="ABOUT FREELANCING" >
                                                                            <div className="tab-item-wrapper">
                                                                            <Row> 
                                                                                    <Col className="mb-5  mt-5" >
                                                                                    <h1>But I must explain</h1>
                                                                                    <Accordion defaultActiveKey="0">
                                                                                        <Card>
                                                                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                                                            Lorem ipsum dolor sit amet, consetetur sadipscing?
                                                                                            <img src={icon} style={{width:"20px", height:"20px ", float:"right"}}></img>
                                                                                            </Accordion.Toggle>
                                                                                            <Accordion.Collapse eventKey="1">
                                                                                            <Card.Body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</Card.Body>
                                                                                            </Accordion.Collapse>
                                                                                        </Card>
                                                                                    </Accordion>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                        </Tab>
                                                                    </Tabs>
                                                                </Col>
                                                        </div>
                                                        </Container>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </Col>
                                </div>
                                <p style={{textAlign:"center"}}>Don’t see your question? <a href="#" target="_blank"> Visit our Help Center</a></p>
                                <p style={{textAlign:"center"}}>Have a question you’d like answered? Email us at  <a href="#" target="_blank"> support@mail.com</a></p>
                                <div className=" bottomSection pl-5 pt-4" style={{
                                    marginLeft:"auto",
                                    marginRight:"auto",
                                    width:"80%" ,
                                    height:"180px",
                                    backgroundImage: `url(${background})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    color:"white",
                                    fontSize:"12px"}}>
                                        <p>Join <strong>Website </strong>Today</p>
                                        <p>But I must explain to you how mistaken idea</p>
                                        <Button variant="outline-primary">Get Started</Button>{' '}
                                    </div>
                         </Container>
    )
}

export default section5
