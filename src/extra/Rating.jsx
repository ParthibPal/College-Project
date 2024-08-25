import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
import './RatingStyle.css';

const Rating = () => {
    const[rating,setRating]=useState(null)
    const[hover,setHover]=useState(null)
  return (
    <>
    <div className='x'>
        <h2>Rate Us</h2>
        </div>
    <div className='y'>
        {[...Array(5)].map((star,i)=>{
                const ratingvalue =i+1
                return (
            <label >
                <input 
                    type="radio" 
                    name="rating" 
                    value={ratingvalue}
                    onClick={() => setRating(ratingvalue)}
                    
                />
                <FaStar 
                    className='star' 
                    color={ratingvalue<= (hover ||rating) ? "#ffc107":"e4e5e9"} 
                    size={20} 
                    onMouseEnter={()=> setHover(ratingvalue)}
                    onMouseLeave={()=> setHover(null)}
                /> 
            </label>
            )
        })}
    </div>
    <div className='z'>
        <textarea placeholder="What's your feedback"/>
    </div>
    <button>Submit</button>
    </>
  )
}

export default Rating;
