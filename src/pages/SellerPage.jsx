// SellerPage.js
import React from 'react';
import '../App.css';

const SellerPage = () => {
  return (
    <div className="seller-page">
      <header className="header">
        <h1>Welcome to Our Sellers</h1>
        <p>Explore services offered by our sellers</p>
      </header>
      <section className="seller-details">
        <div className="seller-info">
          <h2>Seller Name</h2>
          <p>Location: Dist, City, Country</p>
          <p>Contact: email@demo.com</p>
          <p>Phone: +91 0000000000</p>
        </div>
        <div className="seller-services">
          <h2>Services Offered</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Local Service Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SellerPage;
