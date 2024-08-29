import React from 'react';
import "../css/LandingPage.css";
import GroupCard from "../components/GroupCard"
import Card2 from "../components/Card2"
const LandingPage = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>Explore Local Services</h1>
                <p>Discover a wide range of services offered by local professionals</p>
            </header>
            <div className='div1'>
                <div className="card1">
                    <div className='card1-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`} alt='' />
                    </div>
                </div>
                <div className="card2">
                    <div className='card1-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`} alt='' />
                    </div>
                </div>
                <div className="card3">
                    <div className='card1-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`} alt='' />
                    </div>
                </div>
                <div className="card4">
                    <div className='card1-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`} alt='' />
                    </div>
                </div>
                <div className="card5">
                    <div className='card1-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`} alt='' />
                    </div>
                </div>
            </div>

            <div style={{margin:'25px', marginTop:'70px'}}><h1>Variety Of Services</h1></div>
            <div className='div2'>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Car Repair.png`} alt=''/>
                    <p>Service 1</p>
                </div>
                
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Real Estate.png`} alt='' />
                    <p>Service 2</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/plumbing.png`} alt='' />
                    <p>Service 3</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Tutoring.png`} alt='' />
                    <p>Service 4</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Cleaning.png`} alt='' />
                    <p>Service 5</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Electrician.png`} alt='' />
                    <p>Service 6</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Plumbing.png`} alt='' />
                    <p>Service 7</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Personal Chef.png`} alt='' />
                    <p>Service 8</p>
                </div>
            </div>
            <div className='div2'>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Car Repair.png`} alt='' />
                    <p>Service 10</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Real Estate.png`} alt='' />
                    <p>Service 11</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/plumbing.png`} alt='' />
                    <p>Service 12</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Tutoring.png`} alt='' />
                    <p>Service 13</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Cleaning.png`} alt='' />
                    <p>Service 14</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Electrician.png`} alt='' />
                    <p>Service 15</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Plumbing.png`} alt='' />
                    <p>Service 16</p>
                </div>
                <div className="service1">
                    <img src={`${process.env.PUBLIC_URL}/images/Personal Chef.png`} alt='' />
                    <p>Service 17</p>
                </div>
            </div>
            <div style={{margin:'25px', marginTop:'70px'}}><h1>Similar Services</h1></div>
            <GroupCard
                image={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image1={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image2={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image3={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image4={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image5={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image6={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
            />
            <GroupCard
                image={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image1={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image2={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image3={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image4={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image5={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
                image6={`${process.env.PUBLIC_URL}/images/Art Classes.jpg`}
            />
           
            <div style={{margin:'25px', marginTop:'70px'}}><h1>Popular Services</h1></div>
            <div className='last-card'>
            <Card2 imageSrc={`${process.env.PUBLIC_URL}/images/Yoga Classes.jpg`} name = "Yoga Classes" desc = "Practice yoga and improve your physical and mental well-being."/>
            <Card2 imageSrc={`${process.env.PUBLIC_URL}/images/Yoga Classes.jpg`} name = "Yoga Classes" desc = "Practice yoga and improve your physical and mental well-being."/>
            <Card2 imageSrc={`${process.env.PUBLIC_URL}/images/Yoga Classes.jpg`} name = "Yoga Classes" desc = "Practice yoga and improve your physical and mental well-being."/>
            <Card2 imageSrc={`${process.env.PUBLIC_URL}/images/Yoga Classes.jpg`} name = "Yoga Classes" desc = "Practice yoga and improve your physical and mental well-being."/>
            <Card2 imageSrc={`${process.env.PUBLIC_URL}/images/Yoga Classes.jpg`} name = "Yoga Classes" desc = "Practice yoga and improve your physical and mental well-being."/>
            <Card2 imageSrc={`${process.env.PUBLIC_URL}/images/Yoga Classes.jpg`} name = "Yoga Classes" desc = "Practice yoga and improve your physical and mental well-being."/>
            </div>
        </div>
        
    )
}
export default LandingPage;

