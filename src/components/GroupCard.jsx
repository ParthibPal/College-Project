import React from 'react';
import '../css/GroupCard.css';

const CardLayout = (props) => {
  return (
    <div className="main-card-container">
      <div className="main-card">
        <h3>Wedding Requisites</h3>
        <div className="inner-card-container">
          <div className="inner-card">
            <img src={props.image} alt=''/>
            <p>Service 1</p>
          </div>
          <div className="inner-card">
          <img src={props.image2}  alt=''/>
          <p>Service 2</p>
          </div>
          <div className="inner-card">
          <img src={props.image3} alt=''/>
          <p>Service 3</p>
          </div>
        </div>
      </div>
      <div className="main-card">
        <h3>
        Wedding Requisites</h3>
        <div className="inner-card-container">
          <div className="inner-card">
          <img src={props.image4} alt=''/>
          <p>Service 1</p>
          </div>
          <div className="inner-card">
          <img src={props.image5} alt=''/>
          <p>Service 2</p>
          </div>
          <div className="inner-card">
          <img src={props.image6} alt=''/>
          <p>Service 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
