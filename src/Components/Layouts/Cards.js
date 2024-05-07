import React from "react";
import { Col, Card } from "react-bootstrap";
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate



function Cards({ image, title, paragraph, price }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const item = { image, title, price };
    addToCart(item);
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            {/* <div className="item_rating">{renderRatingIcons(rating)}</div> */}
            <div className="wishlist">
             <b><i class="bi bi-heart-fill"></i></b>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_card">
              <button onClick={handleAddToCart} className="btn btn-outline-dark" style={{width: "130px"}}>Add to Cart</button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;