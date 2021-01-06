import React, { Component  } from 'react';
import { Row , Container ,Card } from 'react-bootstrap';
// importimages
import CardImg1 from '../assets/images/team-1.jpg'
import CardImg2 from '../assets/images/team-2.jpg'
import CardImg3 from '../assets/images/team-3.jpg'
import CardImg4 from '../assets/images/team-4.jpg'
import Icon1 from '../assets/images/Path 1902.svg'

import { FaFacebookSquare ,FaTwitter ,FaGooglePlusSquare ,FaPinterestP } from 'react-icons/fa';


class Section5 extends Component {

    state = {
        loading: false,
        data: [{
            img:CardImg1,
            title: 'Jonathan Doe',
            text: 'Seles Agent ',
            country:"New York",
            icon1:Icon1,       
        },
        {
            img:CardImg2,
            title: 'Jonathan Doe',
            text: 'Seles Agent ',
            country:"New York",
            icon1:Icon1,
           
           
        },
        {
            img:CardImg3,
            title: 'Jonathan Doe',
            text: 'Seles Agent ',
            country:"New York",
            icon1:Icon1,
            
        },
        {
            img:CardImg4,
            title: 'Jonathan Doe',
            text: 'Seles Agent ',
            country:"New York",
            icon1:Icon1,
            
        },
        
    ],
        headline: []
    }

    render() {
        return (
            <div className="section5">
                <Container className="section5Container">
                    <div className="text-center py-5 ">
                        <strong>Meet Our Agents</strong>
                     <h1 className="CenterHeading">Our Best Agents</h1> 
                    </div>
                {this.state.loading
                    ? "loading..."
                    : <Row >
                        {this.state.data.map((card, index) => {
                            return (         
                                   <Card data-aos="flip-left"
                                   data-aos-delay="50"
                                   data-aos-duration="2000"
                                   data-aos-easing="ease-in-out-cubic"  key={index} className="text-center "> 
                                         <Card.Img variant="top" src={card.img} />
                                         <div id="teamContacts">
                                                <p><FaFacebookSquare /></p>
                                                 <p><FaTwitter /></p> 
                                                 <p><FaGooglePlusSquare /></p>
                                                 <p><FaPinterestP /></p>
                                         </div>
                                        <Card.Body  >
                                            <Card.Title>{card.title}</Card.Title>
                                            <Card.Text > 
                                              <strong>{card.country}</strong>
                                              <p>{card.text}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        
                                    </Card>
                              
                                
                                    )
                        })}
                    </Row>
                }
                </Container>
            </div>
        )
    }
}
export default Section5;