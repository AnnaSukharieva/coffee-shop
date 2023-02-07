import './App.scss';
import Main from './components/main-page/main-page';
import CoffeeSection from './components/store/coffe-section';
import PleasureSection from './components/store/pleasure-section';
import { BrowserRouter as Router, Route, Routes, Link, } from "react-router-dom";

function App() {
  const products = [
    { name: "Solimo Coffee Beans 2 kg", price: 10.73, country: "Brazil", best: true, link: "img/goods/Solimo.jpg", id: 1 },
    { name: "Presto Coffee Beans 1 kg", price: 15.99, country: "Kenya", best: true, link: "img/goods/Presto.jpg", id: 2 },
    { name: "AROMISTICO Coffee 1 kg", price: 6.99, country: "Columbia", best: true, link: "img/goods/Aromistico.jpg", id: 3 },
    { name: "Solimo Coffee Beans 2 kg", price: 10.73, country: "Brazil", best: false, link: "img/goods/Aromistico.jpg", id: 4 },
    { name: "Presto Coffee Beans 1 kg", price: 15.99, country: "Brazil", best: false, link: "img/goods/Aromistico.jpg", id: 5 },
    { name: "AROMISTICO Coffee 1 kg", price: 6.99, country: "Brazil", best: false, link: "img/goods/Aromistico.jpg", id: 6 }
  ]
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main products={products} />} />
        <Route path='/our-coffe' element={<CoffeeSection products={products} title="About our beans" link="img/store/girl-about.jpg" alt="Girl with a cap of coffee" />} />
        <Route path='/for-your-pleasure' element={<PleasureSection products={products} title="About our beans" link="img/store/coffee-pleasure.jpg" alt="A cap of coffee" />} />
      </Routes>
    </Router>
  );
}

export default App;
