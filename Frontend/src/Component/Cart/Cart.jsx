// src/components/Cart.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../Store/Slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle order placement
  const handleOrder = () => {
    setIsModalOpen(true);
    dispatch(clearCart());
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Inline styles
  const cartPageStyle = {
    padding: '20px',
    minHeight:'80vh',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const cartTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'black',
  };

  const emptyCartMessageStyle = {
    textAlign: 'center',
    color: 'black',
    fontSize: '18px',
  };

  const cartItemsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    color:"black",
  };

  const cartItemStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    color: 'black',
  };

  const itemImageStyle = {
    width: '100%',
    borderRadius: '4px',
    height: '150px',
    objectFit: 'cover',
  };

  const itemActionStyle = {
    marginTop: '10px',
    textAlign: 'right',
  };

  const summaryStyle = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    color: 'black',
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    color: 'black',
  };

  return (
    <div style={cartPageStyle}>
      <h2 style={cartTitleStyle}>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={emptyCartMessageStyle}>Your cart is empty.</p>
      ) : (
        <>
          <div style={cartItemsContainerStyle}>
            {cartItems.map((item) => (
              <div key={item.id} style={cartItemStyle}>
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.name} style={itemImageStyle} />
                ) : (
                  <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                    No Image
                  </div>
                )}
                <h4>{item.name}</h4>
                <div>Price: RS {item.price.toFixed(2)}</div>
                <div>Quantity: {item.quantity}</div>
                <div>Total: RS {(item.price * item.quantity).toFixed(2)}</div>
                <div style={itemActionStyle}>
                  <button
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '5px 10px',
                      cursor: 'pointer',
                    }}
                    onClick={() => dispatch(removeFromCart(item))}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={summaryStyle}>
            <div>Total Items: {totalQuantity}</div>
            <div>Total Price: RS {totalPrice.toFixed(2)}</div>
            <button onClick={handleOrder} style={{ marginRight: '10px', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Order Now
            </button>
            <button onClick={() => dispatch(clearCart())} style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Clear Cart
            </button>
          </div>
        </>
      )}

      {/* Modal Implementation */}
      {isModalOpen && (
        <div style={modalOverlayStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ color: 'black' }}>Order Placed Successfully!</h3>
            <p style={{ color: 'black' }}>Thank you for your purchase.</p>
            <button onClick={closeModal} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
