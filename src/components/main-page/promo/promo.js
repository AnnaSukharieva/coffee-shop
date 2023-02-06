import './promo.scss'
import '../../../App.scss'
import Grains from '../../grains-devider/grains-devider'
import Header from '../../header/header'

const Promo = () => {
	return (
		<div className="promo">
			<Header></Header>
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