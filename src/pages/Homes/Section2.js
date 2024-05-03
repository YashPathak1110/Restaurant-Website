import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Section2.css"
import pizza from "../../Images/Pizza.png"
import salad from "../../Images/salad5.png"
import delivery from "../../Images/Delivery-Scooter-PNG-Images-removebg-preview.png"

function Section2() {
    const mockData = [
        {
            image: pizza,
            title: "Original",
            paragraph: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis laudantium et fugit sint soluta officiis ipsa vel! Delectus in quaerat sapiente reprehenderit ab, voluptatem consequuntur facilis, eius ratione qui illo!`
        },
        {
            
            image: salad, 
            title: "Quality Food",
            paragraph: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis laudantium et fugit sint soluta officiis ipsa vel! Delectus in quaerat sapiente reprehenderit ab, voluptatem consequuntur facilis, eius ratione qui illo!`
        },
        {
            image: delivery,
            title: "Fastest Delivery",
            paragraph: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis laudantium et fugit sint soluta officiis ipsa vel! Delectus in quaerat sapiente reprehenderit ab, voluptatem consequuntur facilis, eius ratione qui illo!`
        }
    ]


    return (
        <>
            <section className='about_section' style={{ height: "1000px" }}>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className='text-center'>
                            <h2>The Burger tests better when you eat it with your family</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae nulla suscipit? Nostrum perferendis voluptatum, blanditiis pariatur deleniti error voluptatem nulla similique explicabo quo. Omnis numquam ipsa doloremque dolor adipisci.</p>
                            <button className='btn btn-danger' style={{ fontSize: "22px", fontFamily: "Times New Roman" }}>Explore Full Name</button><br></br>
                            
                        </Col>
                    </Row>
                </Container>

                <section className='about_wrapper' style={{marginTop: "20rem"}}>
                    <Container>
                        <Row className='justify-content-md-center'>
                            {mockData.map((cardData, index) => (
                                <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                                    <div className='about_box text-center'>
                                        <div className='about_icon'>
                                            <img src={cardData.image}
                                                className='img-fluid'
                                                alt='icon'
                                            >
                                            </img>
                                        </div>
                                        <h4>{cardData.title}</h4>
                                        <p>{cardData.paragraph}</p>
                                    </div>
                                </Col>
                            ))}

                        </Row>
                    </Container>
                </section>
            </section>
        </>
    )
}

export default Section2