import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Nav.css";
const FNav = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className='navbar'>
            <img onClick={() => navigate("/")} src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='' className='logo' title='Door Step'/>
            <ul className='nav-items'>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/services")}>Services</li>
                <li onClick={() => navigate("/sellers")}>Sellers</li>
                <li onClick={() => navigate("/support")}>Customer-Support</li>
            </ul>
            <div className='search-box'>
                <input type='text' placeholder='Search'/>
                <img src={`${process.env.PUBLIC_URL}/images/search-b.png`} alt='search' className='search-icon'/>
            </div>
            <button class="button-81">Sign Up</button>
        </div>
        </>
    )
}
export default FNav;