import React from 'react';


import w1 from '../asserts/womensimg/w1.jpg'
import w2 from '../asserts/womensimg/w2.jpg'
import w3 from '../asserts/womensimg/w3.jpg'
import w4 from '../asserts/womensimg/w4.jpg'
import w5 from '../asserts/womensimg/w5.jpg'
import w6 from '../asserts/womensimg/w6.jpg'
import w7 from '../asserts/womensimg/w7.jpg'
import w8 from '../asserts/womensimg/w8.jpg'
import w9 from '../asserts/womensimg/w9.jpg'
import w10 from '../asserts/womensimg/w10.jpg'
import w11 from '../asserts/womensimg/w11.jpg'
import w12 from '../asserts/womensimg/w12.jpg'


function WomenCollections({ addToBag }) {
  const items = [
    { image: w1, title: "Women's Outfit 1", price: "30-50% OFF" },
    { image: w2, title: "Women's Outfit 2", price: "20-40% OFF" },
    { image: w3, title: "Women's Outfit 3", price: "15-25% OFF" },
    { image: w4, title: "Women's Outfit 4", price: "25-35% OFF" },
    { image: w5, title: "Women's Outfit 5", price: "10-20% OFF" },
    { image: w6, title: "Women's Outfit 6", price: "30-50% OFF" },
    { image: w7, title: "Women's Outfit 7", price: "5-15% OFF" },
    { image: w8, title: "Women's Outfit 8", price: "10-20% OFF" },
    { image: w9, title: "Women's Outfit 9", price: "30-50% OFF" },
    { image: w10, title: "Women's Outfit 10", price: "20-40% OFF" },
    { image: w11, title: "Women's Outfit 11", price: "15-25% OFF" },
    { image: w12, title: "Women's Outfit 12", price: "25-35% OFF" },
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

export default WomenCollections;