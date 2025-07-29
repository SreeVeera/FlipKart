import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './header/appbar.jsx';
import Sphonepage from './header/smartphone.jsx';
import Samsung from './header/samsung.jsx';
import Cartpage from './header/cart.jsx';
import Category  from './header/category.jsx';
import Carousel from './header/Carousel.jsx';
import ElCarousel from './CardMulticarousel/ElectronicsCarousel.jsx';
import Stvpage from './header/smarttv.jsx';
import Xiaomi from './header/xiaomi.jsx';
import "./index.css";
import "./App.css";

function HomePage() {
  return (
    <>
      <Appbar/>
      <Category/>
      <Carousel/>
      <ElCarousel/>
    </>
  );
}

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/smartphones" element={<Sphonepage />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/smarttvs" element={<Stvpage />} />
        <Route path="/xiaomi" element={<Xiaomi />} />
      </Routes>
    </Router>
  );
}
export default App
