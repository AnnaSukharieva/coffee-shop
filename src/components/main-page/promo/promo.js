import './promo.scss';
import '../../../App.scss';
import Grains from '../../grains-devider/grains-devider';
import Nav from '../../header/nav';

const Promo = () => {
	return (
		<div className="promo">
			<Nav></Nav>
				<div className='container'>
					<h1>Everything You Love About Coffee</h1>
					<Grains></Grains>
					<div className="info">
						<h2>We makes every day full of energy and taste</h2>
						<h2>Want to try our beans?</h2>
					</div>
					<a href="">More</a>
			</div>
			
			</div>
	)
}

export default Promo;