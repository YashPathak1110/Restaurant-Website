import React,{useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image1 from '../../Images/Super-Crispy-Fried-Chicken-Rice-Bowl-02.jpg'
import Image2 from '../../Images/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e.jpeg'
import Image3 from '../../Images/sweetpotatoburgers-9sq.webp'
import Image4 from '../../Images/k_Photo_Recipes_2022-03_bacon-cheeseburger_2022-03-16_ATK-0561.jpg'
import Image5 from '../../Images/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e.jpeg'
import Image6 from '../../Images/Turkey-Burgers-googleFourByThree-v2.jpg'
import Image7 from '../../Images/Smokehouse-Burgers-hero.jpg'
import Image8 from '../../Images/Screenshot 2024-04-29 175621.png'
import Cards from '../../Components/Layouts/Cards'
import "./Section3.css";

function Section3() {
    const mockData = [
        {
            id: "1",
            image: Image1,
            title: "Crispy Chicken",
            paragraph: "Chicken breast, chilli souce, tomatoes, pickless, coleslow",
            ratting: 4.5,
            price: 99.15,
        },
        {
            id: "2",
            image: Image2,
            title: "Ultimate Bacon",
            paragraph: "House patty, bacon, tomatoes, red onion, musterd",
            ratting: 4,
            price: 59.15,
        },
        {
            id: "3",
            image: Image3,
            title: "Black sheep",
            paragraph: "American cheese,tometo relish, tomatoes, lettuce, avocedo",
            ratting: 3.5,
            price: 79.15,
        },
        {
            id: "4",
            image: Image7,
            title: "Vegan Burger",
            paragraph: "Chicken breast, chilli souce, tomatoes, pickless, coleslow",
            ratting: 5,
            price: 89.15,
        },
        {
            id: "5",
            image: Image5,
            title: "Double Burger",
            paragraph: "Chedder cheese, 2 patties, mustard, pickless, coleslow",
            ratting: 3.5,
            price: 99,
        },
        {
            id: "6",
            image: Image3,
            title: "Turkey Burger",
            paragraph: "Turkey, Chedder cheese, onion, lattuce, coleslow",
            ratting: 3.0,
            price: 90,
        },
        {
            id: "7",
            image: Image7,
            title: "Smokey House",
            paragraph: "Patty, chilli souce, musterd, Onion, coleslow",
            ratting: 4.5,
            price: 95.10,
        },
        {
            id: "8",
            image: Image8,
            title: "Claasic Burger",
            paragraph: "Chicken breast, Ketchup, tomatoes, pickless, coleslow",
            ratting: 5,
            price: 80,
        }
    ]

   

  return (
    <section className='menu_section'>
        <Container>
            <Row style={{marginTop: "27rem"}} >
                <Col lg={{ span: 8, offset: 2}} className='text-center mb-5 background'  >
                    <h2>OUR CRAZY BURGER</h2>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reiciendis? Veniam eius aliquid tempore natus voluptate deleniti ex harum consectetur.</p>
                </Col>
            </Row>
            <Row >
                {mockData.map((cardData, index)=>(
                    <Cards
                    key={index.id} 
                    image={cardData.image}
                    ratting={cardData.ratting}
                    title={cardData.title}
                    paragraph={cardData.paragraph}
                    price={cardData.price}
                    // renderrattingIcons={renderRatiingIcons}
                    />
                ))}
            </Row>
            <Row className='pt-5'>
                <Col sm={6} lg={5}>
                    <div className='ads_box ads_img1 mb-5 mb-md-0'>
                        <h4>Get Your Free</h4>
                        <h5>CHEESE FRIES</h5>
                     <button type='button' className='btn btn-danger' style={{width: "150px", fontSize: "18px"}}>Learn More</button>
                    </div>
                </Col>
                <Col sm={6} lg={7}>
                    <div className='ads_box ads_img2'>
                        <h4>Get Your Free</h4>
                        <h5>CHEESE FRIES</h5>
                     <button type='button' className='btn btn-danger' style={{width: "170px", fontSize: "18px"}}>Learn More</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section3