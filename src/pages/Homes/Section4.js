import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image from "../../Images/freelyphoto.jpg"
import zomato from "../../Images/Zomato-Logo-removebg-preview.png"
import "./Section4.css";

function Section4() {
  return (
    <>
    <section className='promotion_section'>
      <Container>
        <Row >
          <Col lg={6} className='text-center mb-5 mb-lg-0'>
            <img src={image} className='img-fluid' alt='Promotion' style={{width: "530px",height: "850px", borderRadius: "5px"}}></img>
          </Col>
          <Col style={{marginTop: "7rem"}}>
          <h2>Nothing brings people together like a good burger</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, expedita mollitia. Quis velit officia neque explicabo illo voluptatibus hic deleniti?</p>
            <ul>
              <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus voluptatem minus magni odit ipsa!</p></li>
              <li><p>Queart sodales sapien quismode purus blandit</p></li>
              <li><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus cumque optio neque dolorum sunt repudiandae.</p></li>
              <img src={zomato} alt='zomato' width={"600px"}></img>
            </ul>
            
          </Col>
        </Row>
      </Container>
    </section>

    {/* next section BG Parallex Scroll */}
    <section className='bg_parrallex_scroll'></section>
    </>
  )
}

export default Section4