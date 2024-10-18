import './App.css';
import Autoscroll from './components/Autoscroll';
import CategorySpecials from './components/CategorySpecials';
import Container from './components/Container';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Offerbanner from './components/Offerbanner';
import Promobanner from './components/Promobanner';
import MenCollections from './components/Men Collections';
import WomenCollections from './components/Women Collections';
import KidsCollections from './components/Kids Collections';
import WeddingCollections from './components/Wedding Collections';
import Sidebar from './components/Sidebar';
import BagPage from './components/Bagepage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [bagItems, setBagItems] = useState([]);

  function addToBag(item) {
    setBagItems((prevItems) => [...prevItems, item])
    alert(`${item.title} has been added to your Bag!`)
  }

  return (
    <Router>
    <Navbar bagItems={bagItems} />
    <Sidebar />
    <Routes>
      <Route path="/" element={
        <>
          <Promobanner />
          <Container />
          <Autoscroll />
          <CategorySpecials />
          <Offerbanner />
          <Footer />
        </>
      } />

      <Route path="/men-collections" element={
        <MenCollections addToBag={addToBag} />
      } />

      <Route path="/women-collections" element={
        <WomenCollections addToBag={addToBag} />
      } />

      <Route path="/kids-collections" element={
        <KidsCollections addToBag={addToBag} />
      } />

      <Route path="/wedding-collections" element={
        <WeddingCollections addToBag={addToBag} />
      } />

      <Route path="/bag" element={
        <BagPage bagItems={bagItems} setBagItems={setBagItems} />
      } />
    </Routes>
    <Footer />
  </Router>

  );
}

export default App