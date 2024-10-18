
import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Importing a trash icon from react-icons

function BagPage({ bagItems, setBagItems }) {
  const handleRemoveItem = (index) => {
    setBagItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="bag-page">
      <h1>Your Shopping Bag</h1>
      {bagItems.length > 0 ? (
        <div className="bag-items">
          {bagItems.map((item, index) => (
            <div key={index} className="bag-item">
              <img src={item.image} alt={item.title} />
              <div className="bag-item-info">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <a href="#" className="shop-now">Shop Now</a>
                <button onClick={() => handleRemoveItem(index)} className="remove-icon">
                  <FaTrash /> {/* Display the trash icon */}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your bag is empty.</p>
      )}
    </div>
  );
}

export default BagPage;

