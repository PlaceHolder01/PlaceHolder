import React,{useEffect,useState} from 'react'
import { collection ,getDocs} from 'firebase/firestore';
import {db} from "../firebase";
import Navigation from '../navigation/navigation';
// import 

const Feed=()=>{
    const [food, setfood] = useState([]);

  useEffect( () => {
    getDocs(collection(db,'food')).then((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      console.log(postData);
      setfood(postData);
    });
  }, []);
    
    return (
        <section id="feed">
            <Navigation />
            <div className='feed-heading'>Available Food</div>
            <div className='feed-grid'>
            {food.map((item, index) => (
                <div key={index} className="list-item">
                <div className="item-name">{item.name}</div>
                <div className="item-type">{item.type}</div>
                <div className="item-quantity">{item.quantity}</div>

                </div>
            ))}
            </div>
        </section>
    );
}
export default Feed;    