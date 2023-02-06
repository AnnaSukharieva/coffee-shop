import './promo.scss'
import '../../../App.scss'

const Promo = () => {
	return (
		<div className="promo">
			<div className='container'>
				<h1>Everything You Love About Coffee</h1>
				<div className="line-container">
					<div className="line">
						<hr />
					</div>
					<div className="grain">
						<img src="icons/grain.svg" alt="grains of coffee" />
					</div>
					<div className="line">
						<hr />
					</div>
				</div>
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