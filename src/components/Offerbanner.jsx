import React from 'react'
import playStore from '../asserts/play-store.webp'
import appStore from '../asserts/app store.png'

function Offerbanner() {
  return (
    <div class="offer-banner">
      <div class="offer-text">
        <h1>More Knockout Offers Waiting!</h1>
        <p>Only on the <span class="app-name">Myntra</span> App</p>
        <div class="download-buttons">
          <a href="#" class="google-play">
            <img src={playStore} alt="Download on Google Play" />
          </a>
          <a href="#" class="app-store">
            <img src={appStore} alt="Download on App Store" />
          </a>
        </div>
      </div>
    </div>

  )
}

export default Offerbanner