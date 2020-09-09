import React from 'react'
import { Tabs, Tab, Container , Row,Col ,Button} from 'react-bootstrap';
import facebook from '../assets/images/Path1864.svg';
import twitter from '../assets/images/Path1865.svg';
import linkedin from '../assets/images/Path1866.svg';
import instgram from '../assets/images/Path1867.svg'; 
import youtube from '../assets/images/Path1868.svg';
import pinterest from '../assets/images/Path1869.svg';

const footer = () => {
    return (
        <div className="pt-5 pb-3" style={{backgroundColor:"#f1f1f1" }}>
            <Container >
            <Row >
                <Col md={4} className="mb-5">
                    <h3>Site Logo</h3>
                    <p className="font-weight-light">Privacy Policy | Terms of Service</p>
                    <p className="font-weight-lighter">© 2020 company International. All Copyrights Reserved!</p>
                    <Row className="ml-1 ">
                        <img className="mr-3" src={facebook}></img>
                        <img className="mr-3" src={twitter}></img>
                        <img className="mr-3" src={linkedin}></img>
                        <img className="mr-3" src={instgram}></img>
                        <img className="mr-3" src={youtube}></img>
                        <img  className="mr-3"src={pinterest}></img>
                    </Row>
                </Col>
                <Col md={4} className="pl-5 ">
                <ul style={{listStyle:"none",lineHeight:"2"}}>
                    <li ><a  className="font-weight-bold" >About</a></li>
                    <li ><a href="#">Privacy Policy</a></li>
                    <li ><a href="#">Terms of Service</a></li>
                    <li ><a href="#">Intellectual Property Claims</a></li>
                </ul>
                </Col>
                <Col md={4} className="pl-5 ">
                <ul style={{listStyle:"none",lineHeight:"2"}}>
                    <li ><a className="font-weight-bold" >Support</a></li>
                    <li ><a href="#">How it works?</a></li>
                    <li ><a href="#">Support</a></li>
                    <li ><a href="#">Trust & Safety</a></li>
                    <li ><a href="#">Invite Friends</a></li>
                </ul>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default footer
