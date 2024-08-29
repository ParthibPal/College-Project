import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import LandingPage from './pages/LandingPage';
import SellerPage from './pages/SellerPage';
import ServicesPage from './pages/ServicesPage';
import Footer from "./components/Footer.jsx"
// Dummy components for routes
const Home = () => <div style={{ paddingTop: '80px' }}>{<LandingPage/>}</div>;
const Services= () => <div style={{ paddingTop: '80px' }}>{<ServicesPage />}</div>;
const Seller = () => <div style={{ paddingTop: '80px' }}>{<SellerPage/>}</div>;

const App = () => {
  return (
    <>
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sellers" element={<Seller />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;