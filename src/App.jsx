import Category  from 'C:/React/Flipkart/src/header/category.jsx';
import Appbar from 'C:/React/Flipkart/src/header/appbar.jsx';
//import Product from 'C:/React/Flipkart/src/header/productcard.jsx';<Product/>
import Carousel from 'C:/React/Flipkart/src/header/Carousel.jsx';
import ElCarousel from 'C:/React/Flipkart/src/CardMulticarousel/ElectronicsCarousel.jsx';
import "./index.css";
function App() {
  return (
    <>
    <Appbar/>
    <Category/>
    <Carousel/>
    <ElCarousel/>
    </>
  );
}
export default App
