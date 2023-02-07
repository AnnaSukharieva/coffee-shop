// import './App.scss';
import Promo from './promo/promo';
import About from './about/about';
import BestGoods from './best-goods/best-boods';
import Footer from '../footer/footer';

function Main(props) {
	return (
		<div className="App">
			<Promo></Promo>
			<About></About>
			<BestGoods products={props.products}> </BestGoods>
			<Footer></Footer>
		</div>
	);
}

export default Main;
