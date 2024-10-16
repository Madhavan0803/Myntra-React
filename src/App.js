import './App.css';
import Autoscroll from './components/Autoscroll';
import CategorySpecials from './components/CategorySpecials';
import Container from './components/Container';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Offerbanner from './components/Offerbanner';
import Promobanner from './components/Promobanner';
import MenCollections from './components/Men Collections';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
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
            <MenCollections />
            <Footer /> 
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App