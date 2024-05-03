import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Section6.css";

function Section6() {
  return (
    <>
    <section className='contact_section'>
      <Container>
        <Row className='justify-content-center'>
          <Col className='text-align-center'>
          <h4>We Guarentee</h4>
          <h2>30 Minuets Delivery!</h2>

          <p> Aliquam a augue suscipit, luctus neque purus ipsum neque undo<br></br>
              dolor primis libero tempus, blandit a cursus varius luctus neque
              magna</p>
              <button className='btn btn-primary' style={{color: "black", fontSize: "21px", width: "280px"}}><b>Call : 999-888-7777</b></button>
          </Col>
        </Row>
      </Container>
      </section>
      </>
  )
}

export default Section6