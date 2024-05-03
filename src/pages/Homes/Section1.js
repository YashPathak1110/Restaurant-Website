import React from 'react'
import { Container, Row, Col,Carousel } from 'react-bootstrap'
import Burger1 from '../../Images/Burger3.png'
import Burger5 from '../../Images/burger7.png'
import Burger6 from '../../Images/burger6.png'
import { Link } from 'react-router-dom'
import "./Section1.css";
function Section1() {
    return (
        <>
        <section className='hero_section' style={{height: "1000px"}}>
            <Container>
                <Row>
                    <Col lg={7} className='mb-5 mb-lg-0'>
                        <div className='position-relative'>
                            <Carousel controls={false} interval={1500}>
                                <Carousel.Item>
                                    <img 
                                        className="d-block w-100"
                                        src={Burger1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img style={{marginTop:"6rem"}}
                                        className="d-block w-100"
                                        src={Burger5}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Burger6}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <div className='price_badge'>
                                <div className='badge_text'>
                                    <h4 className='h4_xs'>Only</h4>
                                    <h4 className='h3_lg'>$6.99</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='hero_text text-center' style={{marginTop: "5rem"}}>
                            <h1 className='text-white'> Burger King </h1><br></br>
                            <h2 className='text-white'>With Onion</h2>
                            <p className='text-white'>Lorem ipsum dolor, sit amet  adipisicing elit. Quos obcaecati debitis fugiat aut sapiente modi, minus exercitationem dolor aperiam dolores iste excepturi tempore, id sed nemo magni doloribus? provident.</p><br></br>
                            <Link to='/' className='btn btn-warning' >
                                <b><p style={{fontFamily: "inherit", fontWeight: "700"}}>Order now</p></b>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
)
}
export default Section1