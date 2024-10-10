import React from 'react'
import playStore from '../asserts/play-store.webp'
import appStore from '../asserts/app store.png'

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-column">
          <h3>Online Shopping</h3>
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Home & Living</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Myntra Insider</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Customer Policies</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">T&C</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Track Orders</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Grievance Officer</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Experience Myntra App on Mobile</h3>
          <div class="app-links">
            <a href="#"
              ><img src={playStore} alt="Google Play"
            /></a>
            <a href="#"><img src={appStore} alt="App Store" /></a>
          </div>
          <div class="social-icons">
            <h3>Keep in Touch</h3>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Whitehat</a></li>
            <li><a href="#">Cleartrip</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>100% ORIGINAL</h3>
          <p>guarantee for all products at myntra.com</p>
          <h3>Return within 14 days</h3>
          <p>of receiving your order</p>
        </div>

        <div class="footer-container">
          <div class="popular-searches">
            <h3>POPULAR SEARCHES</h3>
            <p>
              <a href="#">Makeup</a> | <a href="#">Dresses For Girls</a> |
              <a href="#">T-Shirts</a> | <a href="#">Sandals</a> |
              <a href="#">Headphones</a> | <a href="#">Babydolls</a> |
              <a href="#">Blazers For Men</a> | <a href="#">Handbags</a> |
              <a href="#">Ladies Watches</a> | <a href="#">Bags</a> |
              <a href="#">Sport Shoes</a> | <a href="#">Reebok Shoes</a> |
              <a href="#">Puma Shoes</a> | <a href="#">Boxers</a> |
              <a href="#">Wallets</a> | <a href="#">Tops</a> |
              <a href="#">Earrings</a> | <a href="#">Fastrack Watches</a> |
              <a href="#">Kurtis</a> | <a href="#">Nike</a> |
              <a href="#">Smart Watches</a> | <a href="#">Titan Watches</a> |
              <a href="#">Designer Blouse</a> | <a href="#">Gowns</a> |
              <a href="#">Cricket Shoes</a> | <a href="#">Forever 21</a> |
              <a href="#">Eye Makeup</a> | <a href="#">Photo Frames</a> |
              <a href="#">Punjabi Suits</a> | <a href="#">Bikini</a> |
              <a href="#">Myntra Fashion Show</a> | <a href="#">Lipstick</a> |
              <a href="#">Saree</a> | <a href="#">Watches</a> |
              <a href="#">Dresses</a> | <a href="#">Lehenga</a> |
              <a href="#">Nike Shoes</a> | <a href="#">Adidas Shoes</a> |
              <a href="#">Woodland Shoes</a> | <a href="#">Jewellery</a> |
              <a href="#">Designer Sarees</a>
            </p>
          </div>

          <div class="contact-us">
            <p>In case of any concern, <a href="#">Contact Us</a></p>
            <p>
              © 2024 www.myntra.com. All rights reserved.
              <span class="affiliate">A Flipkart company</span>
            </p>
          </div>

          <div class="address">
            <h3>Registered Office Address</h3>
            <p>Buildings Alyssa,</p>
            <p>Begonia and Clover situated in Embassy Tech Village,</p>
            <p>Outer Ring Road,</p>
            <p>Devarabeesanahalli Village,</p>
            <p>Varthur Hobli,</p>
            <p>Bengaluru – 560103, India</p>
          </div>
          <div class="contact-info">
            <p>CIN: U72300KA2007PTC041799</p>
            <p>Telephone: <a href="tel:+918061561999">+91 9025654903</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer