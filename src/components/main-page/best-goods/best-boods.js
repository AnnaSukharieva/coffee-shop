import '../../../App.scss';
import './best-goods.scss'

const BestGoods = () => {
	const items = [
		{ name: "Solimo Coffee Beans 2 kg", price: 10.73, link: "img/best-goods/Solimo.jpg", id: 1},
		{ name: "Presto Coffee Beans 1 kg", price: 15.99, link: "img/best-goods/Presto.jpg", id: 2},
		{ name: "AROMISTICO Coffee 1 kg", price: 6.99, link: "img/best-goods/Aromistico.jpg", id: 3}
	]

	const cardsInner = items.map((item) => {
		return (
			<a href="">
				<div className="card" key={item.id}>
					<img src={item.link} alt={item.name} />
					<h3 className='title'>{item.name}</h3>
					<div className="price">{item.price}$</div>
				</div>
			</a>
		)
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