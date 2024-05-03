import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import playstore from "../../Images/en_badge_web_generic-removebg-preview.png"
import IOS from "../../Images/png-transparent-app-store-apple-google-play-iphone-mid-autumn-lantern-text-logo-mobile-phones-removebg-preview.png"
import combo from "../../Images/146889-king-burger-combo-download-free-image-removebg-preview.png"
import "./Section5.css"

function Section5() {
  return (
    <>
    <section className='shop_section'>
    <Container>
        <Row className='align-items-center'>
        <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-5'>
            <h4>Download mobile App and</h4>
            <h2>save up to 20%</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente voluptatum quidem sint suscipit? Quod perspiciatis, necessitatibus cupiditate libero sunt ea.</p>
            <Link>
                <img src={IOS} alt='IOS' className='img-fluid store me-3'></img>
            </Link>
            <Link>
                <img src={playstore} alt='Android' className='img-fluid store me-3'></img>
            </Link>
         </Col>
         <Col lg={6}>
            <img src={combo} alt='e-shop' className='img-fluid' width={"600rem"}></img>
         </Col>
        </Row>
    </Container>
    </section>
    
    </>
  )
}

export default Section5