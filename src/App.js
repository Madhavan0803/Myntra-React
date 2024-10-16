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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Sidebar/>
            <Promobanner />
            <Container />
            <Autoscroll />
            <CategorySpecials />
            <Offerbanner />
            <Footer />
          </>
        } />

        <Route path="/men-collections" element={
          <>
            <Navbar />
            <Sidebar/>
            <MenCollections />
            <Footer /> 
          </>
        } />

        <Route path="/women-collections" element={
          <>
            <Navbar />
            <Sidebar/>
            <WomenCollections />
            <Footer /> 
          </>
        } />
        <Route path="/kids-collections" element={
          <>
            <Navbar />
            <Sidebar/>
            <KidsCollections />
            <Footer /> 
          </>
        } />
         <Route path="/wedding-collections" element={
          <>
            <Navbar />
            <Sidebar/>
            <WeddingCollections />
            <Footer /> 
          </>
        } />
        
      </Routes>
    </Router>
  );
}

export default App