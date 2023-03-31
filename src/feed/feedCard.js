import React from 'react';
import './feed.css';

const FeedCard = (props) => {
    const handleClick=()=>{

    }
  return (
    <div className='FeedCard'>
        <div className='feedcard-data'>
            <div className='feedcard-resturant'>{props.name}</div>
            <div className='feedcard-resturant'>{props.quantity}</div>
            <div className='feedcard-resturant'>{props.type}</div>
        </div>
        <div className='feedcard-button'>
            {/* {console.log(props)} */}
            <button className="signup-button" type="submit" onClick={handleClick}>
                Request Resturant
            </button>
        </div>
    </div>
  )
}

export default FeedCard;