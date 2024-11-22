import React from 'react';

function Cart({ cart = [], updateQuantity, clearCart }) {
  // Safely calculate the total price using default cart value
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section id="cart">
      <h2>Your Cart</h2>
      {/* Handle the case when the cart is empty */}
      {cart.length > 0 ? (
        <>
          {cart.map((cartItem, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                margin: '5px 0',
              }}
            >
              <h3>{cartItem.name}</h3>
              <p>
                <strong>Price:</strong> ${cartItem.price.toFixed(2)}
              </p>
              <p>
                <strong>Quantity:</strong> {cartItem.quantity}
              </p>
              <p>
                <strong>Subtotal:</strong> $
                {(cartItem.price * cartItem.quantity).toFixed(2)}
              </p>
              <div>
                <button
                  onClick={() => updateQuantity(cartItem.name, 1)}
                  style={{
                    marginRight: '5px',
                    padding: '5px 10px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => updateQuantity(cartItem.name, -1)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: '10px',
              padding: '10px',
              borderTop: '1px solid #ddd',
            }}
          >
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button
              onClick={clearCart}
              style={{
                marginTop: '10px',
                padding: '10px 15px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Remove All Items
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </section>
  );
}

export default Cart;