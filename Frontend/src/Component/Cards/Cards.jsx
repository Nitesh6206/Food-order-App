import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Slices/cartSlice';

const Cards = ({ foodName, imageUrl, price, id, name }) => {
  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const [servingSize, setServingSize] = useState('Half'); // State to manage serving size
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleServingSizeChange = (e) => {
    setServingSize(e.target.value);
  };

  const handleAddToCart = () => {
    const item = { id, name, price: price * quantity, quantity, servingSize };
    dispatch(addToCart(item));
  };

  // Calculate total price based on quantity
  const totalPrice = price * quantity;

  return (
    <Card
      style={{
        width: '18rem',
        height: '350px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden'
      }}
      className="mx-auto my-4 position-relative"
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{
          height: '150px',
          objectFit: 'cover',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px'
        }}
      />
      <Card.Body className="text-center">
        <Card.Title className="fs-5 text-primary mb-2">{foodName}</Card.Title>

        <div className="d-flex justify-content-around mb-2">
          {/* Quantity Selector */}
          <select 
            className="form-select w-50" 
            value={quantity} 
            onChange={handleQuantityChange}
            aria-label="Quantity Selector"
          >
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {/* Serving Size Selector */}
          <select 
            className="form-select w-50 ms-2" 
            value={servingSize} 
            onChange={handleServingSizeChange}
            aria-label="Serving Size Selector"
          >
            <option>Half</option>
            <option>Full</option>
          </select>
        </div>

        {/* Updated Total Price */}
        <div className="TotalPrice fs-6 font-weight-bold mb-2">
          Total Price: <span className="text-danger">RS {totalPrice.toFixed(2)}</span>
        </div>

        {/* Add to Cart Button */}
        <Button 
          variant="primary" 
          className="w-100 rounded-pill"
          onClick={handleAddToCart}
          style={{
            transition: "background-color 0.3s ease, transform 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3"; // Darken the button on hover
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#007bff"; // Reset button color
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Add
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
