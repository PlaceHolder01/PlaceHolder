import React,{useState,useEffect} from 'react';
import {getDocs,collection} from 'firebase/firestore';
import{db} from "../firebase";
import Support from '../support';
import './foodbank.css';

const Restaurant = () => {
  const [food, setfood] = useState([]);

  useEffect( () => {
    getDocs(collection(db,'food')).then((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => {
        if(doc.data.resturantid===localStorage.getItem('uid'))
          postData.push({ ...doc.data(), id: doc.id });
      });
      console.log(postData);
      setfood(postData);
    });
  }, []);

  return (
    <section className="foodbank">
      <h2 className="foodbank-heading">Donated Items</h2>
      <div className="foodbank-list">
        <div className="list-item">
          <div className="item-name">Item</div>
          <div className="item-type">type</div>
          <div className="item-quantity">Food Quantity</div>
          <div className="item-received-date">Date</div>
        </div>
        {food.map((item, index) => (
          <div key={index} className="list-item">
            <div className="item-name">{item.name}</div>
            <div className="item-type">{item.type}</div>
            <div className="item-quantity">{item.quantity}</div>
            <div className="item-received-date">{item.receivedDate}</div>
          </div>
        ))}
      </div>
      <Support />
    </section>
  );
};

export default Restaurant;
