import React from 'react'
import myntraLogo from '../asserts/myntra logo.webp'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ bagItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isBagOpen, setIsBagOpen] = useState(false);

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function toggleBag() {
    setIsBagOpen(!isBagOpen);
  }
  return (
    <nav class="navbar">
      <div class="navbar-left">
        <img src={myntraLogo} alt="Logo" class="logo" />
        <ul class="navbar-menu">
          <li class="dropdown">
            <a href="#">MEN</a>
            <div class="dropdown-content">
              <div class="column">
                <ul>
                  <li class="heading">Topwear</li>
                  <li>T-Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Formal Shirts</li>
                  <li>Sweatshirts</li>
                  <li>Sweaters</li>
                  <li>Jackets</li>
                  <li>Blazers & Coats</li>
                  <li>Suits</li>
                  <li>Rain Jackets</li>
                  <hr />
                  <li class="heading">Indian & Festive Wear</li>
                  <li>Kurtas & Kurta Sets</li>
                  <li>Sherwanis</li>
                  <li>Nehru Jackets</li>
                  <li>Dhotis</li>
                </ul>
              </div>
              <div class="column">
                <ul>
                  <li class="heading">Bottomwear</li>
                  <li>Jeans</li>
                  <li>Casual Trousers</li>
                  <li>Formal Trousers</li>
                  <li>Shorts</li>
                  <li>Track Pants & Joggers</li>
                  <hr />
                  <li class="heading">Innerwear & Sleepwear</li>
                  <li>Briefs & Trunks</li>
                  <li>Boxers</li>
                  <li>Vests</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Thermals</li>
                  <hr />
                  <li class="heading">Plus Size</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Footwear</li>
                  <li>T-Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Formal Shirts</li>
                  <li>Sweatshirts</li>
                  <li>Sweaters</li>
                  <li>Jackets</li>
                  <li>Blazers & Coats</li>
                  <li>Suits</li>
                  <li>Rain Jackets</li>
                  <hr />
                  <li class="heading">Personal Care & Grooming</li>
                  <hr />
                  <li class="heading">Sunglasses & Frames</li>
                  <hr />
                  <li class="heading">Watches</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Sports & Active Wear</li>
                  <li>Sports Shoes</li>
                  <li>Sports Sandals</li>
                  <li>Active T-Shirts</li>
                  <li>Track Pants & Shorts</li>
                  <li>Tracksuits</li>
                  <li>Jackets & Sweatshirts</li>
                  <li>Sports Accessories</li>
                  <li>Swimwear</li>
                  <hr />
                  <li class="heading">Gadgets</li>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>
              </div>
              <div class="column">
                <ul>
                  <li class="heading">Fashion Accessories</li>
                  <li>Wallets</li>
                  <li>Belts</li>
                  <li>Perfumes & Body Mists</li>
                  <li>Trimmers</li>
                  <li>Deodorants</li>
                  <li>Ties, Cufflinks & Pocket Squares</li>
                  <li>Accessory Gift Sets</li>
                  <li>Caps & Hats</li>
                  <li>Mufflers, Scarves & Gloves</li>
                  <li>Phone Cases</li>
                  <li>Rings & Wristwear</li>
                  <li>Helmets</li>
                  <hr />
                  <li class="heading">Bags & Backpacks</li>
                  <li>Luggages & Trolleys</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <a href="#">WOMEN</a>
            <div class="dropdown-content">
              <div class="column">
                <ul>
                  <li class="heading">Indian & Fusion Wear</li>
                  <li>Kurtas & Suits</li>
                  <li>Kurtis, Tunics & Tops</li>
                  <li>Sarees</li>
                  <li>Ethnic Wear</li>
                  <li>Leggings, Salwars & Churidars</li>
                  <li>Skirts & Palazzos</li>
                  <li>Dress Materials</li>
                  <li>Lehenga Cholis</li>
                  <li>Dupattas & Shawls</li>
                  <li>Jackets</li>
                  <hr />
                  <li class="heading">Belts, Scarves & More</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Western Wear</li>
                  <li>Dresses</li>
                  <li>Tops</li>
                  <li>Tshirts</li>
                  <li>Jeans</li>
                  <li>Trousers & Capris</li>
                  <li>Shorts & Skirts</li>
                  <li>Co-ords</li>
                  <li>Playsuits</li>
                  <li>Jumpsuits</li>
                  <li>Shrugs</li>
                  <li>Sweaters & Sweatshirts</li>
                  <li>Jackets & Coats</li>
                  <li>Blazers & Waistcoats</li>
                  <hr />
                  <li class="heading">Plus Size</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Maternity</li>
                  <li class="heading">Footwear</li>
                  <li>Flats</li>
                  <li>Casual Shoes</li>
                  <li>Heels</li>
                  <li>Boots</li>
                  <li>Sports Shoes & Floaters</li>
                  <hr />
                  <li class="heading">Sports & Active Wear</li>
                  <li>Clothing</li>
                  <li>Footwear</li>
                  <li>Sports Accessories</li>
                  <li>Sports Equipment</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Lingerie & Sleepwear</li>
                  <li>Bra</li>
                  <li>Briefs</li>
                  <li>Shapewear</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Swimwear</li>
                  <li>Camisoles & Thermals</li>
                  <hr />
                  <li class="heading">Beauty & Personal Care</li>
                  <li>Makeup</li>
                  <li>Skincare</li>
                  <li>Premium Beauty</li>
                  <li>Lipsticks</li>
                  <li>Fragrances</li>
                  <hr />
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Gadgets</li>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                  <hr />
                  <li class="heading">Jewellery</li>
                  <li>Fashion Jewellery</li>
                  <li>Fine Jewellery</li>
                  <li>Earrings</li>
                  <hr />
                  <li class="heading">Backpacks</li>
                  <li>Handbags, Bags & Wallets</li>
                  <hr />
                  <li class="heading">Luggages & Trolleys</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <a href="#">KIDS</a>
            <div class="dropdown-content">
              <div class="column">
                <ul>
                  <li class="heading">Boys Clothing</li>
                  <li>T-Shirts</li>
                  <li>Shirts</li>
                  <li>Shorts</li>
                  <li>Jeans</li>
                  <li>Trousers</li>
                  <li>Clothing Sets</li>
                  <li>Ethnic Wear</li>
                  <li>Track Pants & Pyjamas</li>
                  <li>Jacket, Sweater & Sweatshirts</li>
                  <li>Party Wear</li>
                  <li>Innerwear & Thermals</li>
                  <li>Nightwear & Loungewear</li>
                  <li>Value Packs</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Girls Clothing</li>
                  <li>Dresses</li>
                  <li>Tops</li>
                  <li>Tshirts</li>
                  <li>Clothing Sets</li>
                  <li>Lehenga Choli</li>
                  <li>Kurta Sets</li>
                  <li>Party Wear</li>
                  <li>Dungarees & Jumpsuits</li>
                  <li>Skirts & Shorts</li>
                  <li>Tights & Leggings</li>
                  <li>Jeans, Trousers & Capris</li>
                  <li>Jacket, Sweater & Sweatshirts</li>
                  <li>Innerwear & Thermals</li>
                  <li>Nightwear & Loungewear</li>
                  <li>Value Packs</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Footwear</li>
                  <li>Casual Shoes</li>
                  <li>Flipflops</li>
                  <li>Sports Shoes</li>
                  <li>Flats</li>
                  <li>Sandals</li>
                  <li>Heels</li>
                  <li>School Shoes</li>
                  <li>Socks</li>
                  <hr />
                  <li class="heading">Toys & Games</li>
                  <li>Learning & Development</li>
                  <li>Activity Toys</li>
                  <li>Soft Toys</li>
                  <li>Action Figure / Play Set</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Infants</li>
                  <li>Bodysuits</li>
                  <li>Rompers & Sleepsuits</li>
                  <li>Clothing Sets</li>
                  <li>Tshirts & Tops</li>
                  <li>Dresses</li>
                  <li>Bottom Wear</li>
                  <li>Winter Wear</li>
                  <li>Innerwear & Sleepwear</li>
                  <li>Infant Care</li>
                  <hr />
                  <li class="heading">Home & Bath</li>
                  <li class="heading">Personal Care</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Kids Accessories</li>
                  <li>Bags & Backpacks</li>
                  <li>Watches</li>
                  <li>Jewellery & Hair Accessory</li>
                  <li>Sunglasses</li>
                  <li>Masks & Protective Gears</li>
                  <li>Caps & Hats</li>
                  <hr />
                  <li class="heading">Brands</li>
                  <li>H&M</li>
                  <li>Max Kids</li>
                  <li>Pantaloons</li>
                  <li>United Colors Of Benetton Kids</li>
                  <li>YK</li>
                  <li>U.S. Polo Assn. Kids</li>
                  <li>Mothercare</li>
                  <li>HRX</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <a href="#">HOME & LIVING</a>
            <div class="dropdown-content">
              <div class="column">
                <ul>
                  <li class="heading">Bed Linen & Furnishing</li>
                  <li>Bed Runners</li>
                  <li>Mattress Protectors</li>
                  <li>Bedsheets</li>
                  <li>Bedding Sets</li>
                  <li>Blankets, Quilts & Dohars</li>
                  <li>Pillows & Pillow Covers</li>
                  <li>Bed Covers</li>
                  <li>Diwan Sets</li>
                  <li>Chair Pads & Covers</li>
                  <li>Sofa Covers</li>
                  <hr />
                  <li class="heading">Flooring</li>
                  <li>Floor Runners</li>
                  <li>Carpets</li>
                  <li>Floor Mats & Dhurries</li>
                  <li>Door Mats</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Bath</li>
                  <li>Bath Towels</li>
                  <li>Hand & Face Towels</li>
                  <li>Beach Towels</li>
                  <li>Towels Set</li>
                  <li>Bath Rugs</li>
                  <li>Bath Robes</li>
                  <li>Bathroom Accessories</li>
                  <li>Shower Curtains</li>
                  <hr />
                  <li class="heading">Lamps & Lighting</li>
                  <li>Floor Lamps</li>
                  <li>Ceiling Lamps</li>
                  <li>Table Lamps</li>
                  <li>Wall Lamps</li>
                  <li>Outdoor Lamps</li>
                  <li>String Lights</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Home Décor</li>
                  <li>Plants & Planters</li>
                  <li>Aromas & Candles</li>
                  <li>Clocks</li>
                  <li>Mirrors</li>
                  <li>Wall Décor</li>
                  <li>Festive Decor</li>
                  <li>Pooja Essentials</li>
                  <li>Wall Shelves</li>
                  <li>Fountains</li>
                  <li>Showpieces & Vases</li>
                  <li>Ottoman</li>
                  <hr />
                  <li class="heading">Cushions & Cushion Covers</li>
                  <li class="heading">Curtains</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Home Gift Sets</li>
                  <hr />
                  <li class="heading">Kitchen & Table</li>
                  <li>Table Runners</li>
                  <li>Dinnerware & Serveware</li>
                  <li>Cups and Mugs</li>
                  <li>Bakeware & Cookware</li>
                  <li>Kitchen Storage & Tools</li>
                  <li>Bar & Drinkware</li>
                  <li>Table Covers & Furnishings</li>
                  <hr />
                  <li class="heading">Storage</li>
                  <li>Bins</li>
                  <li>Hangers</li>
                  <li>Organisers</li>
                  <li>Hooks & Holders</li>
                  <li>Laundry Bags</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Brands</li>
                  <li>H&M</li>
                  <li>Marks & Spencer</li>
                  <li>Home Centre</li>
                  <li>Spaces</li>
                  <li>D'Decor</li>
                  <li>Story@Home</li>
                  <li>Pure Home & Living</li>
                  <li>Swayam</li>
                  <li>Raymond Home</li>
                  <li>Maspar</li>
                  <li>My Trident</li>
                  <li>Cortina</li>
                  <li>Random</li>
                  <li>Ellementry</li>
                  <li>ROMEE</li>
                  <li>SEJ by Nisha Gupta</li>
                </ul>
              </div>
            </div>
          </li>

          <li class="dropdown">
            <a href="#">BEAUTY</a>
            <div class="dropdown-content">
              <div class="column">
                <ul>
                  <li class="heading">Makeup</li>
                  <li>Lipstick</li>
                  <li>Lip Gloss</li>
                  <li>Lip Liner</li>
                  <li>Mascara</li>
                  <li>Eyeliner</li>
                  <li>Kajal</li>
                  <li>Eyeshadow</li>
                  <li>Foundation</li>
                  <li>Primer</li>
                  <li>Concealer</li>
                  <li>Compact</li>
                  <li>Nail Polish</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Skincare, Bath & Body</li>
                  <li>Face Moisturiser</li>
                  <li>Cleanser</li>
                  <li>Masks & Peel</li>
                  <li>Sunscreen</li>
                  <li>Serum</li>
                  <li>Face Wash</li>
                  <li>Eye Cream</li>
                  <li>Lip Balm</li>
                  <li>Body Lotion</li>
                  <li>Body Wash</li>
                  <li>Body Scrub</li>
                  <li>Hand Cream</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Haircare</li>
                  <li>Shampoo</li>
                  <li>Conditioner</li>
                  <li>Hair Cream</li>
                  <li>Hair Oil</li>
                  <li>Hair Gel</li>
                  <li>Hair Color</li>
                  <li>Hair Serum</li>
                  <li>Hair Accessory</li>
                  <hr />
                  <li class="heading">Fragrances</li>
                  <li>Perfume</li>
                  <li>Deodorant</li>
                  <li>Body Mist</li>
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Appliances</li>
                  <li>Hair Straightener</li>
                  <li>Hair Dryer</li>
                  <li>Epilator</li>
                  <hr />
                  <li class="heading">Men's Grooming</li>
                  <li>Trimmers</li>
                  <li>Beard Oil</li>
                  <li>Hair Wax</li>
                  <hr />
                  <li class="heading">Beauty Gift & Makeup Set</li>
                  <li>Beauty Gift</li>
                  <li>Makeup Kit</li>
                  <hr />
                  <li class="heading">Premium Beauty</li>
                  <li class="heading">Wellness & Hygiene</li>
                  <hr />
                </ul>
              </div>

              <div class="column">
                <ul>
                  <li class="heading">Top Brands</li>
                  <li>Lakme</li>
                  <li>Maybelline</li>
                  <li>LOreal</li>
                  <li>Philips</li>
                  <li>Bath & Body Works</li>
                  <li>THE BODY SHOP</li>
                  <li>Biotique</li>
                  <li>Mamaearth</li>
                  <li>MCaffeine</li>
                  <li>Nivea</li>
                  <li>Lotus Herbals</li>
                  <li>LOreal Professionnel</li>
                  <li>KAMA AYURVEDA</li>
                  <li>M.A.C</li>
                  <li>Forest Essentials</li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="#">STUDIO <span class="new">NEW</span></a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <Link to="/profile">
          <div className="icon-text">
            <i className="fas fa-user icon"></i>
            <span>Profile</span>
          </div>
        </Link>
        <Link to="/wishlist">
          <div className="icon-text">
            <i className="fas fa-heart icon"></i>
            <span>Wishlist</span>
          </div>
        </Link>
        <Link to="/bag">
          <div className="icon-text">
            <i className="fas fa-shopping-bag icon"></i>
            <span>Bag </span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar