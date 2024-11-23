import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate=useNavigate();
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2>Welcome to Foodie Delight</h2>
        <p>Discover the best food in town, crafted to satisfy your cravings!</p>
        <button className="explore-btn" onClick={()=>navigate("/menu")}>Explore the Menu</button>
        
      </div>
    </section>
  );
}

export default Home;