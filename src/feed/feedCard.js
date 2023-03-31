import React from 'react';
// import './feed.css';
import './FeedCard.css';

const FeedCard = (props) => {
    const handleClick=()=>{
    }
  return (
    <div className='FeedCard'>
        <div className='feedcard-data'>
            <div className='feedcard-resturant'>{props.resturantname}</div>
            <div className='feedcard-resturant'>{props.name}</div>
            <div className='feedcard-resturant'>{props.quantity}</div>
            <div className='feedcard-resturant'>{props.type}</div>
        </div>
            <button className= {`feedcard-button ${props.status}`} type="submit" onClick={handleClick}>
                Take food
            </button>
    </div>
  )
}

export default FeedCard;