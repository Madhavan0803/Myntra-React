import React from 'react';

import w1 from '../asserts/weddingimg/w1.jpg'
import w2 from '../asserts/weddingimg/w2.jpg'
import w3 from '../asserts/weddingimg/w3.jpg'
import w4 from '../asserts/weddingimg/w4.jpg'
import w5 from '../asserts/weddingimg/w5.jpg'
import w6 from '../asserts/weddingimg/w6.jpg'
import w7 from '../asserts/weddingimg/w7.jpg'
import w8 from '../asserts/weddingimg/w8.jpg'
import w9 from '../asserts/weddingimg/w9.jpg'
import w10 from '../asserts/weddingimg/w10.jpg'
import w11 from '../asserts/weddingimg/w11.jpg'
import w12 from '../asserts/weddingimg/w12.jpg'


function WeddingCollections({ addToBag }) {
  const items = [
    { image: w1, title: "Wedding Outfit 1", price: "30-50% OFF" },
    { image: w2, title: "Wedding Outfit 2", price: "20-40% OFF" },
    { image: w3, title: "Wedding Outfit 3", price: "15-25% OFF" },
    { image: w4, title: "Wedding Outfit 4", price: "25-35% OFF" },
    { image: w5, title: "Wedding Outfit 5", price: "10-20% OFF" },
    { image: w6, title: "Wedding Outfit 6", price: "30-50% OFF" },
    { image: w7, title: "Wedding Outfit 7", price: "5-15% OFF" },
    { image: w8, title: "Wedding Outfit 8", price: "10-20% OFF" },
    { image: w9, title: "Wedding Outfit 9", price: "30-50% OFF" },
    { image: w10, title: "Wedding Outfit 10", price: "20-40% OFF" },
    { image: w11, title: "Wedding Outfit 11", price: "15-25% OFF" },
    { image: w12, title: "Wedding Outfit 12", price: "25-35% OFF" },
  ]

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

export default WeddingCollections;