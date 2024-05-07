import React, { useState } from 'react'
import "../../styles/HeaderStyle.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../Images/tastylogo.png'


const Header = () => {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

 
  return (
    <header>
      <Navbar 
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      > <Container>
        <Navbar.Brand href="#home">
            <Link className='logo' to="/">

                <img src={Logo} className='img-fluid' style={{width: "100px", height: "100px"}} ></img>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link as={Link} to="/" style={{color: "black",}}><b>Home</b></Nav.Link>
            <Nav.Link as={Link} to="/about" style={{color: "black"}}><b>About</b></Nav.Link> 
            <Nav.Link as={Link} to="/shop" style={{color: "black"}}><b>Shop</b></Nav.Link> 
            <Nav.Link as={Link} to="/blog" style={{color: "black"}}><b>Blog</b></Nav.Link> 
            <Nav.Link as={Link} to="/contact" style={{color: "black"}}><b>Contact</b></Nav.Link> 
            <Nav.Link as={Link} to="/cart">
                <div className='cart'>
                <b><i class="bi bi-cart4 fs-5" ></i></b>
                <em className='roundpoint'></em>
                </div>
            </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    )
}

export default Header