import React from 'react';
import { useCart } from '../Components/Layouts/CartContext';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
  const { cartItems, removeFromCart, increaseQuantity,decreaseQuantity } = useCart();
  const navigate = useNavigate();

  const handleIncreaseQuantity = (index) => {
    increaseQuantity(index);
  };

  const handleDecreaseQuantity = (index) => {
    decreaseQuantity(index);
  };

  const getTotalPrice = (item) => {
    return item.price * item.quantity;
  
  };

  const getTotalCartPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += getTotalPrice(item);
    });
    return total.toFixed(2);
  };

  return (
    <div className='container-fluid background' style={{ height: "1920px" }}>
      <h1 style={{ marginLeft: "50rem", paddingTop: "7rem", color: "white", fontSize: "60px" }}>Shopping Cart</h1><br></br>
      <button onClick={() => navigate('/')} className='btn btn-outline-primary' style={{ marginLeft: "53rem", color: "white", fontSize: "23px", fontFamily: "cursive", fontWeight: "700" }}>Back to Home</button>
      <ul>
        {cartItems.map((item, index) => (
      <li key={index}>
      <img src={item.image} alt={item.title} style={{ width: '230px', height: "220px", borderRadius: "15px", marginLeft: "15rem" }} />
      <span style={{ fontSize: "40px", color: "white", marginLeft: "7rem" }}>{item.title} - ${item.price} - Quantity: {item.quantity} - Total: ${getTotalPrice(item)}</span><br/><br/>
      <div style={{ marginLeft: "40rem" }}>
          <button onClick={() => removeFromCart(index)} style={{ display: "inline-block", marginRight: "1rem", fontSize: "23px" }} className='btn btn-danger'>Remove</button>
          <button onClick={() => handleIncreaseQuantity(index)} style={{ display: "inline-block", marginRight: "1rem", fontSize: "23px" }} className='btn btn-success'>Increase Quantity</button>
          <button onClick={() => handleDecreaseQuantity(index)} style={{ display: "inline-block", fontSize: "23px" }} className='btn btn-warning'>Decrease Quantity</button><br/><br/>
      </div>
  </li>  
     
        ))}
      </ul>
      <h2 style={{ color: "red", marginLeft: "75rem",marginTop: "7rem", fontSize: "3rem", textShadow: "1px 1px 1px white" }}>Total Cart Price: <span style={{marginLeft: "2rem", color: "white"}}>${getTotalCartPrice()}</span></h2>
    </div>
  );
}

export default ShoppingCart;
