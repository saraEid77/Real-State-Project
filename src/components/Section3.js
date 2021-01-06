import React, { Component , Fragment } from 'react';
import { Row , Col, Container ,Card } from 'react-bootstrap';
// importimages
import CardImg1 from '../assets/images/cardImg1.jpg'
import CardImg2 from '../assets/images/cardImg2.jpg'
import CardImg3 from '../assets/images/cardImg3.jpg'
import CardImg4 from '../assets/images/cardImg4.jpg'
import CardImg5 from '../assets/images/cardImg5.jpg'
import CardImg6 from '../assets/images/cardImg6.jpg'
import Icon1 from '../assets/images/Path 1902.svg'

// import icons
import { FaBath ,FaBed ,FaCarAlt,FaVectorSquare} from 'react-icons/fa';


class Section3 extends Component {

    state = {
        loading: false,
        data: [{
            img:CardImg1,
            title: 'This is a Project title',
            country:"New York",
            text: 'Fantastic One Bedroom Facing East In This Amazing Trump Place Doorman Building. There Is A Large Kitchen, Washer And Dryer,…',
            icon1:Icon1,       
        },
        {
            img:CardImg2,
            title: 'This is a Project title',
            text: 'Fantastic One Bedroom Facing East In This Amazing Trump Place Doorman Building. There Is A Large Kitchen, Washer And Dryer,… ',
            country:"New York",
            icon1:Icon1,
           
           
        },
        {
            img:CardImg3,
            title: 'This is a Project title',
            text: 'Fantastic One Bedroom Facing East In This Amazing Trump Place Doorman Building. There Is A Large Kitchen, Washer And Dryer,… ',
            country:"New York",
            icon1:Icon1,
            
        },
        {
            img:CardImg4,
            title: 'This is a Project title',
            text: 'Fantastic One Bedroom Facing East In This Amazing Trump Place Doorman Building. There Is A Large Kitchen, Washer And Dryer,… ',
            country:"New York",
            icon1:Icon1,
            
        },
        {
            img:CardImg5,
            title: 'This is a Project title',
            text: 'Fantastic One Bedroom Facing East In This Amazing Trump Place Doorman Building. There Is A Large Kitchen, Washer And Dryer,… ',
            country:"New York",
            icon1:Icon1,
           
        },
        {
            img:CardImg6,
            title: 'This is a Project title',
            text: 'Fantastic One Bedroom Facing East In This Amazing Trump Place Doorman Building. There Is A Large Kitchen, Washer And Dryer,… ',
            country:"New York",
            icon1:Icon1,
        },
    ],
        headline: []
    }

    render() {
        return (
            <div className="section3  ">
                <Container>
                    <div className="text-center my-5">
                        <strong>Our Featured Properties For Sale and Rent</strong>
                    <h1 className="CenterHeading">Properties For Sale & Rent</h1> 
                    </div>
                {this.state.loading
                    ? "loading..."
                    : <Row xs={1} sm={2} md={3} >
                        {this.state.data.map((card, index) => {
                            return (
                                <Col>
                                <Card  key={index} >
                                         <div class="imgLeft"><h3>Sale</h3></div>
                                         <Card.Img variant="top" src={card.img} />
                                         <div class="imgRight"><h3>$11,412 </h3></div>
                                        <Card.Body  >
                                            <Card.Title>{card.title}</Card.Title>
                                            <Card.Text > 
                                              <strong>{card.country}</strong>
                                              <p>{card.text}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">
                                           
                                              <Row>
                                                   <Fragment class="leftIcons">
                                                        <FaBed /><p>03</p>
                                                        <FaBath/> <p>02</p>
                                                        <FaCarAlt/><p>8</p>
                                                   </Fragment>
                                                   <span sm={1} class="rightIcons" >
                                                       <FaVectorSquare /> <span>1400 square</span>
                                                   </span>
                                              </Row>
                                          
                                        </Card.Footer>
                                    </Card>
                                    </Col>
                                    )
                        })}
                    </Row>
                }
                </Container>
            </div>
        )
    }
}
export default Section3;