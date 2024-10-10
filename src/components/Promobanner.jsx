import React from 'react'
import FlatOff from '../asserts/Flat Off.png'

function Promobanner() {
  return (
    <div class="promo-banner">
    <div class="promo-content">
      <h2>FLAT ₹500 OFF</h2>
    </div>
    <img src={FlatOff} alt="Myntra Logo" class="promo-logo" />
  </div>
  )
}

export default Promobanner