import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './header/appbar.jsx';
import Sphonepage from './header/smartphone.jsx';
import Samsung from './header/samsung.jsx';
import Category  from './header/category.jsx';
import Carousel from './header/Carousel.jsx';
import ElCarousel from './CardMulticarousel/ElectronicsCarousel.jsx';
import "./index.css";

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
      </Routes>
    </Router>
  );
}
export default App
