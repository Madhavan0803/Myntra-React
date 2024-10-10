import './App.css';
import Autoscroll from './components/Autoscroll';
import CategorySpecials from './components/CategorySpecials';
import Container from './components/Container';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Offerbanner from './components/Offerbanner';
import Promobanner from './components/Promobanner';

function App() {
  return (
    <>
  <Navbar/>
  <Promobanner/>
  <Container/>
  <Autoscroll/>
  <CategorySpecials/>
  <Offerbanner/>
  <Footer/>
  </>

  );
}

export default App;