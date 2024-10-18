import React from 'react';


import m1 from '../asserts/mensimg/m1.jpg'
import m2 from '../asserts/mensimg/m2.jpg'
import m3 from '../asserts/mensimg/m3.jpg'
import m4 from '../asserts/mensimg/m4.jpg'
import m5 from '../asserts/mensimg/m5.jpg'
import m6 from '../asserts/mensimg/m6.jpg'
import m7 from '../asserts/mensimg/m7.jpg'
import m8 from '../asserts/mensimg/m8.jpg'
import m9 from '../asserts/mensimg/m9.jpg'
import m10 from '../asserts/mensimg/m10.jpg'
import m11 from '../asserts/mensimg/m11.jpg'
import m12 from '../asserts/mensimg/m12.jpg'


function MenCollections({ addToBag }) {
  const items = [
    { image: m1, title: "Ethnic Wear", price: "50-80% OFF" },
    { image: m2, title: "Casual Wear", price: "30-50% OFF" },
    { image: m3, title: "Sports Wear", price: "40-60% OFF" },
    { image: m4, title: "Formal Wear", price: "20-30% OFF" },
    { image: m5, title: "Winter Wear", price: "10-50% OFF" },
    { image: m6, title: "Summer Collection", price: "15-25% OFF" },
    { image: m7, title: "Beachwear", price: "20-40% OFF" },
    { image: m8, title: "Party Wear", price: "30-50% OFF" },
    { image: m9, title: "Jeans", price: "25-45% OFF" },
    { image: m10, title: "Shirts", price: "15-35% OFF" },
    { image: m11, title: "T-Shirts", price: "10-30% OFF" },
    { image: m12, title: "Shorts", price: "20-40% OFF" },
  ];

  function handleAddToBag(item) {
    addToBag(item);
  }
  return(
    <div className="men-collections-container">
      {items.map((item) => (
        <div key={item.id} className="collection-card">
          <img src={item.image} alt={item.title} />
          <div className="men-collection-info">
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <a href="#" className="men-collection-shop-now">Shop Now</a>
            <a href="#" className="icon-link" onClick={() => handleAddToBag(item)}>
              <i className="fas fa-shopping-bag icon"></i>
            </a>
          </div>
        </div>
      ))}
      </div>

  )
}

export default MenCollections;
