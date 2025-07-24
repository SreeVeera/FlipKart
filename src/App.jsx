import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './header/appbar.jsx';
import Product from './header/productcard.jsx';
import Sphonepage from './header/smartphone.jsx';
import Samsung from './header/samsung.jsx';
import './App.css';

function HomePage() {
  return (
    <>
      <Appbar />
      <Product />
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
