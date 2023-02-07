import '../../../App.scss';
import './best-goods.scss'

const BestGoods = (props) => {

	const cardsInner = props.products.map((item) => {
		if (item.best) {
			return (
				<a href="">
					<div className="card" key={item.id}>
						<img src={item.link} alt={item.name} />
						<h3 className='title'>{item.name}</h3>
						<div className="price">{item.price}$</div>
					</div>
				</a>
			)
		}
	})

	return (
		<div className='best-goods'>
			<div className="container">
				<h2>Our best</h2>
				<div className="cards">
					{cardsInner}
					{/* <div className="card">
						<img src="img/best-goods/Solimo.jpg" alt="Solimo coffee" />
						<h3 className='title'>Solimo Coffee Beans 2 kg</h3>
						<div className="price">10.73$</div>
					</div>
					<div className="card">
						<img src="img/best-goods/Solimo.jpg" alt="Solimo coffee" />
						<h3 className='title'>Solimo Coffee Beans 2 kg</h3>
						<div className="price">10.73$</div>
					</div>
					<div className="card">
						<img src="img/best-goods/Solimo.jpg" alt="Solimo coffee" />
						<h3 className='title'>Solimo Coffee Beans 2 kg</h3>
						<div className="price">10.73$</div>
					</div>
					<div className="card">
						<img src="img/best-goods/Solimo.jpg" alt="Solimo coffee" />
						<h3 className='title'>Solimo Coffee Beans 2 kg</h3>
						<div className="price">10.73$</div>
					</div>
					<div className="card">
						<img src="img/best-goods/Solimo.jpg" alt="Solimo coffee" />
						<h3 className='title'>Solimo Coffee Beans 2 kg</h3>
						<div className="price">10.73$</div>
					</div>
					<div className="card">
						<img src="img/best-goods/Solimo.jpg" alt="Solimo coffee" />
						<h3 className='title'>Solimo Coffee Beans 2 kg</h3>
						<div className="price">10.73$</div>
					</div>*/}
				</div> 
			</div>
		</div>
	)
}

export default BestGoods;