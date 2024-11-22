import React, { useState } from 'react';
import Cart from './Cart'; // Import the Cart component

function Menu() {
  const [items] = useState([
    {
      name: 'Pizza',
      description: 'Delicious cheese pizza',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
      price: 8.99,
      rating: 0,
    },
    {
      name: 'Burger',
      description: 'Juicy grilled burger',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s',
      price: 6.49,
      rating: 0,
    },
    {
      name: 'Pasta',
      description: 'Yummy pasta',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCuJy69l2kA9d8pddtKObu3_h9JllCKIEvw&s',
      price: 7.29,
      rating: 0,
    },
    {
      name: 'Momos',
      description: 'Smoky momos',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wqumxNkLwjYzsQUdcSgV9DpLiwwPL5gmwA&s',
      price: 4.99,
      rating: 0,
    },
  ]);

  const [ratings, setRatings] = useState({});
  const [cart, setCart] = useState([]);

  const handleRating = (itemIndex, rating) => {
    setRatings((prevRatings) => ({ ...prevRatings, [itemIndex]: rating }));
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.name === item.name);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (itemName, change) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) => {
          if (cartItem.name === itemName) {
            const newQuantity = cartItem.quantity + change;
            return newQuantity > 0 ? { ...cartItem, quantity: newQuantity } : null;
          }
          return cartItem;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]); 
  };

  return (
    <section id="menu">
      <h2>Our Menu</h2>
      {items.map((item, index) => (
        <div key={index} className="menu-item" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <img src={item.imageUrl} alt={item.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: 'pointer',
                    color: star <= (ratings[index] || 0) ? '#FFD700' : '#ccc',
                  }}
                  onClick={() => handleRating(index, star)}
                >
                  ★
                </span>
              ))}
            </div>
            <button
              onClick={() => {addToCart(item)}}
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
<Cart
  cart={cart} // Ensure this is passed correctly
  updateQuantity={updateQuantity}
  clearCart={clearCart}
/>
    </section>
  );
}

export default Menu;