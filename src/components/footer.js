import React from 'react'
import {  Container } from 'react-bootstrap';
import {FaHeart } from 'react-icons/fa';

const footer = () => {
    return (
        <div className="footer text-center pt-5 pb-3" style={{backgroundColor:"#D7D7D7" }}>
            <Container >
            <div class="ripple">

            </div>
            All Rights Reserved For : <strong>Sara Eid <FaHeart/> </strong>
            </Container>
        </div>
    )
}

export default footer
