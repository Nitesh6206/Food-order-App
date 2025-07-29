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
        width: '20rem',
        height: '420px',
        borderRadius: '20px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        border: 'none',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      className="mx-auto my-4 position-relative"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      }}
    >
      {/* Image Container with Overlay */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{
            height: '180px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            filter: 'brightness(1.1) contrast(1.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)'
          }}
        />
      </div>

      <Card.Body className="text-center p-4" style={{ background: '#ffffff' }}>
        <Card.Title 
          className="mb-3" 
          style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#2c3e50',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            letterSpacing: '0.5px'
          }}
        >
          {foodName}
        </Card.Title>

        <div className="d-flex justify-content-between mb-3" style={{ gap: '12px' }}>
          {/* Quantity Selector */}
          <div style={{ flex: 1 }}>
            <label 
              style={{ 
                fontSize: '0.85rem', 
                fontWeight: '600', 
                color: '#6c757d',
                display: 'block',
                marginBottom: '4px'
              }}
            >
              Quantity
            </label>
            <select 
              className="form-select" 
              value={quantity} 
              onChange={handleQuantityChange}
              aria-label="Quantity Selector"
              style={{
                border: '2px solid #e9ecef',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: '#495057',
                backgroundColor: '#f8f9fa',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#007bff';
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.boxShadow = '0 0 0 0.2rem rgba(0,123,255,0.15)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e9ecef';
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Serving Size Selector */}
          <div style={{ flex: 1 }}>
            <label 
              style={{ 
                fontSize: '0.85rem', 
                fontWeight: '600', 
                color: '#6c757d',
                display: 'block',
                marginBottom: '4px'
              }}
            >
              Size
            </label>
            <select 
              className="form-select" 
              value={servingSize} 
              onChange={handleServingSizeChange}
              aria-label="Serving Size Selector"
              style={{
                border: '2px solid #e9ecef',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: '#495057',
                backgroundColor: '#f8f9fa',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#007bff';
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.boxShadow = '0 0 0 0.2rem rgba(0,123,255,0.15)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e9ecef';
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <option>Half</option>
              <option>Full</option>
            </select>
          </div>
        </div>

        {/* Total Price with Enhanced Styling */}
        <div 
          className="mb-3"
          style={{
            padding: '12px 16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '15px',
            border: '2px solid #e9ecef'
          }}
        >
          <div style={{ 
            fontSize: '0.9rem', 
            color: '#6c757d', 
            fontWeight: '500',
            marginBottom: '2px'
          }}>
            Total Price
          </div>
          <div style={{
            fontSize: '1.4rem',
            fontWeight: '800',
            color: '#e74c3c',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}>
            ₹{totalPrice.toFixed(2)}
          </div>
        </div>

        {/* Enhanced Add to Cart Button */}
        <Button 
          variant="primary" 
          className="w-100"
          onClick={handleAddToCart}
          style={{
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '15px',
            padding: '12px 24px',
            fontSize: '1.1rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
            boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #0056b3 0%, #003d82 100%)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 123, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.3)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1)';
          }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;