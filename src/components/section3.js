import React, { useEffect } from "react";
import { Row , Col, Container ,Card ,Button ,Media,Image} from 'react-bootstrap';
// importimages
import CardImg1 from '../assets/images/Rectangle 1499.png'
import CardImg2 from '../assets/images/Rectangle 1499-1.png'
import CardImg3 from '../assets/images/Rectangle 1499-2.png'
import CardImg4 from '../assets/images/Rectangle 1499-3.png'
import Icon1 from '../assets/images/Path 1902.svg'
import woman from '../assets/images/pexels-photo-2748239.jpeg'
import personImg1 from '../assets/images/pexels-photo-2748239.jpeg'
import personImg2 from '../assets/images/5620d91b-d875-4c06-9a6f-93d4554196cc.jpg'
import personImg3 from '../assets/images/a28cedf1-2688-49de-aa16-6e8759dd0d28.jpg'
import personImg4 from '../assets/images/pexels-photo-4350178.jpeg'

const section3 = () => {


    const cardsInfo =[ 
        {
            img:CardImg1,
            title: 'This is a Project title',
            text: 'in Design',
            icon1:Icon1,
            rating:4.2,
            PersonName: 'Fatma Adel',
            PersonImg :personImg1,
            
        },
        {
            img:CardImg2,
            title: 'This is a Project title',
            text: 'in Design ',
            icon1:Icon1,
            rating:4.7,
            PersonName: 'Hossam Khaled',
            PersonImg :personImg2,
           
        },
        {
            img:CardImg3,
            title: 'This is a Project title',
            text: 'in Design ',
            icon1:Icon1,
            rating:4.8,
            PersonName: 'Heba',
            PersonImg :personImg1,
        },
        {
            img:CardImg4,
            title: 'This is a Project title',
            text: 'in Design ',
            icon1:Icon1,
            rating:4.5,
            PersonName: 'Mahmoud Mostafa',
            PersonImg :personImg3,
        },
        ]


    const renderCard = (card , index) =>{
        return( 
              <Col md={3} className="float-left my-5" style={{  alignItems: "center",
                justifyContent: "center" }}>  
                    <Card   key={index} data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out-cubic">
                        <Card.Img variant="top" src={card.img} />
                        <Card.Body style={{height:"100px"}} >
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text >      
                            {card.text}
                            <div className="d-xl-table float-right pt-1">
                            <img  style={{width:"15px"}} src={card.icon1}></img>
                            <p className=" pl-3 pt-1" style={{position:"relative" ,top:"-24px", left:"5px" , color:"#FFBF00"}} >{card.rating}</p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        <Media>
                            <Image 
                                width={50}
                                height={50}
                                roundedCircle 
                                className="mx-3 mb-3"
                                src={card.PersonImg}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5 style={{fontSize:"15px"}}>{ card.PersonName}</h5>
                                <p style={{fontSize:"10px"}}> Job Title </p>
                            </Media.Body>
                        </Media>
                    </Card>
                </Col>
               
               
              
               
        )
    }
    return (
        <Container className="section3 "  >
           {cardsInfo.map(renderCard)}
        </Container>
    )
}

export default section3
