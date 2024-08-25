import React from 'react';
import "../css/LandingPage.css";

const LandingPage = () => {
    return(
        <div className="container">
            <div className='div1'>
                <div className="card1">
                    <div className='card1-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`} alt=''/>
                    </div>
                </div>
                <div className="card2">
                    <div className='card1-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`} alt=''/>
                    </div>
                </div>
                <div className="card3">
                    <div className='card1-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`} alt=''/>
                    </div>
                </div>
                <div className="card4">
                    <div className='card1-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`} alt=''/>
                    </div>
                </div>
                <div className="card5">
                    <div className='card1-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`} alt=''/>
                    </div>
                </div>
            </div>


            <div className='div2'>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Car Repair.png`} alt=''/>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Real Estate.png`} alt=''/>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Lagal.png`} alt=''/>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Tutoring.png`} alt=''/>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Cleaning.png`} alt=''/>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Electrician.png`} alt=''/>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Plumbing.png`} alt=''/>                    
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Personal Chef.png`} alt=''/>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Legal.png`} alt=''/>
                </div>
            </div>
            <div className='div3'>3</div>
            <div className='div4'>4</div>
        </div>
    )
}
export default LandingPage;

// https://github.com/ParthibPal/College-Project.git