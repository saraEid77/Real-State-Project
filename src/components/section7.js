import React, { Component , useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};


class Section7 extends Component {

    state = {
        loading: false,
        data: [{
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
        {
            img:CardImg4,
            title: 'This is a Project title',
            text: 'in Design ',
            icon1:Icon1,
            rating:4.5,
            PersonName: 'Mahmoud Mostafa',
            PersonImg :personImg3,
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
    ],
        headline: []
    }

    // componentDidMount() {
    //     this.setState({ loading: true })
    //     console.log('app mounted');
    //     fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5')
    //         .then(data => data.json())
    //         .then(data => this.setState({ data: data.articles, loading: false }, () => console.log(data.articles)))
    // }

    render() {
        return (
            <div className="section3 ">
                <Container>
                <h1 className="text-left mb-5"><b>Get Inspired With Projects Done on Site</b></h1>
                {this.state.loading
                    ? "loading..."
                    : <div>
                         <Carousel responsive={responsive}>
                        {this.state.data.map((card, index) => {
                            return (
                                // <div className="card text-left mt-5" key={indx}>
                                //     <img className="media-img card-img-top" src={post.img} alt="Alt text"></img>
                                //     <img style={{ height: '100px' }} src={post.urlToImage} alt="Alt text"></img>

                                //     <div className="card-body">
                                //         <h5 className="card-title">{post.title}</h5>
                                //         <p className="card-text">{post.description}</p>
                                //         <a href={post.url} target="_blank" rel="noopener noreferrer">Read More</a>
                                //     </div>
                                // </div>
                                <Card  key={index} data-aos="zoom-in"
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

                            )
                        })}
                         </Carousel>
                    </div>
                }
                </Container>
            </div>
        )
    }
}
export default Section7;