import './App.scss';
import Promo from './components/main-page/promo/promo';
import About from './components/main-page/about/about';
import BestGoods from './components/main-page/best-goods/best-boods';

function App() {
  return (
    <div className="App">
      <Promo></Promo>
      <About></About>
      <BestGoods></BestGoods>
    </div>
  );
}

export default App;
