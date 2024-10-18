import React from 'react';

import k1 from '../asserts/kids/k1.webp'
import k2 from '../asserts/kids/k2.webp'
import k10 from '../asserts/kids/k10.webp'
import k9 from '../asserts/kids/k9.webp'
import k5 from '../asserts/kids/k5.webp'
import k6 from '../asserts/kids/k6.webp'
import k11 from '../asserts/kids/k11.webp'
import k12 from '../asserts/kids/k12.webp'


function KidsCollections({ addToBag }){
  const items = [
    { image: k1, title: "Kids Wear 1", price: "30-50% OFF" },
    { image: k2, title: "Kids Wear 2", price: "20-40% OFF" },
    { image: k5, title: "Kids Wear 3", price: "15-25% OFF" },
    { image: k6, title: "Kids Wear 4", price: "25-35% OFF" },
    { image: k9, title: "Kids Wear 5", price: "10-20% OFF" },
    { image: k10, title: "Kids Wear 6", price: "30-50% OFF" },
    { image: k11, title: "Kids Wear 7", price: "5-15% OFF" },
    { image: k12, title: "Kids Wear 8", price: "10-20% OFF" },
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

export default KidsCollections;