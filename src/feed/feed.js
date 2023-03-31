import React,{useState}from 'react'
import FeedCard from './feedCard';

const Feed=()=>{
    const list=[
        {   
            name: "Suryansh",
            quantity:40,
            type:'Veg'
        },
        {   
            name: "Suryansh",
            quantity:40,
            type:'Veg'
        },
        {
            name: "Suryansh",
            quantity:40,
            type:'Veg'
        },
    ];
    return (
        <section id="feed">
            <div className='feed-heading'>Available Food</div>
            <div className='feed-grid'>
            {
                list.map((val,idx)=>{
                    return (
                        <FeedCard
                        key={idx}
                        name={val.name}
                        quantity={val.quantity}
                        type={val.type}
                        />
                    );
                })
            }
            
            </div>
        </section>
    );
}
export default Feed;