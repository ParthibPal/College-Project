import React from 'react';
import '../css/Card2.css';
const Card2 = (props) => {
    return(
        <div className="service-card">
          <img src={props.imageSrc} alt={props.name} className="card-image" />
          <div className='try'>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <button className="button-85">Explore</button>
          </div>
        </div>
        
    )
}
export default Card2;