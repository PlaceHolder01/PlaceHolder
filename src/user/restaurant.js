import React from 'react';
import './foodbank.css';

const Restaurant = () => {
  const receivedItems = [
    { name: 'Apples', quantity: 20, receivedDate: '2022-03-15' },
    { name: 'Bread', quantity: 10, receivedDate: '2022-03-14' },
    { name: 'Carrots', quantity: 15, receivedDate: '2022-03-12' },
    { name: 'Potatoes', quantity: 8, receivedDate: '2022-03-10' },
    { name: 'Bananas', quantity: 25, receivedDate: '2022-03-08' },
    { name: 'Cucumbers', quantity: 12, receivedDate: '2022-03-07' },
    { name: 'Oranges', quantity: 18, receivedDate: '2022-03-06' },
    { name: 'Tomatoes', quantity: 14, receivedDate: '2022-03-05' },
    { name: 'Onions', quantity: 6, receivedDate: '2022-03-03' },
    { name: 'Lettuce', quantity: 3, receivedDate: '2022-03-02' },
    { name: 'Bread', quantity: 10, receivedDate: '2022-03-14' },
    { name: 'Carrots', quantity: 15, receivedDate: '2022-03-12' },
    { name: 'Potatoes', quantity: 8, receivedDate: '2022-03-10' },
    { name: 'Bananas', quantity: 25, receivedDate: '2022-03-08' },
    { name: 'Cucumbers', quantity: 12, receivedDate: '2022-03-07' },
    { name: 'Oranges', quantity: 18, receivedDate: '2022-03-06' },
    { name: 'Tomatoes', quantity: 14, receivedDate: '2022-03-05' },
    { name: 'Onions', quantity: 6, receivedDate: '2022-03-03' },
    { name: 'Lettuce', quantity: 3, receivedDate: '2022-03-02' },
    { name: 'Bread', quantity: 10, receivedDate: '2022-03-14' },
    { name: 'Carrots', quantity: 15, receivedDate: '2022-03-12' },
    { name: 'Potatoes', quantity: 8, receivedDate: '2022-03-10' },
    { name: 'Bananas', quantity: 25, receivedDate: '2022-03-08' },
    { name: 'Cucumbers', quantity: 12, receivedDate: '2022-03-07' },
    { name: 'Oranges', quantity: 18, receivedDate: '2022-03-06' },
    { name: 'Tomatoes', quantity: 14, receivedDate: '2022-03-05' },
    { name: 'Onions', quantity: 6, receivedDate: '2022-03-03' },
    { name: 'Lettuce', quantity: 3, receivedDate: '2022-03-02' },
  ];

  return (
    <section className="foodbank">
      <h2 className="foodbank-heading">Donated Items</h2>
      <div className="foodbank-list">
        {/* div list item */}
        <div className="list-item">
          <div className="item-name">Item</div>
          <div className="item-quantity">Quantity</div>
          <div className="item-received-date">Date</div>
        </div>
        {receivedItems.map((item, index) => (
          <div key={index} className="list-item">
            <div className="item-name">{item.name}</div>
            <div className="item-quantity">{item.quantity}</div>
            <div className="item-received-date">{item.receivedDate}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurant;
