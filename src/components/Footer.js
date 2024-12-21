import React from 'react';

function Footer() {
  return (
    <footer style={{height: '50px', display: 'flex', alignItems:"center", justifyContent: "center", marginRight: "10px", color: "#fff"}}>
      <p>&copy; 2023 Foodie Zone. All rights reserved.</p>
      <a href="#feedback">Give Feedback</a>
    </footer>
  );
}

export default Footer;
