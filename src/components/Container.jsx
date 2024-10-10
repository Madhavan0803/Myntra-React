import React from 'react'
import containerImg from '../asserts/container-img.png'

function Container() {
  return (
    <div class="Container">
      <img src={containerImg} alt="" />
      <div class="arrow-left">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="arrow-right">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default Container