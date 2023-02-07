import './market.scss'

const Market = () => {
	const items = [
		{ name: "Solimo Coffee Beans 2 kg", price: 10.73, country: "Brazil", link: "img/best-goods/Solimo.jpg", id: 1 },
		{ name: "Presto Coffee Beans 1 kg", price: 15.99, country: "Kenya", link: "img/best-goods/Presto.jpg", id: 2 },
		{ name: "AROMISTICO Coffee 1 kg", price: 6.99, country: "Columbia", link: "img/best-goods/Aromistico.jpg", id: 3 },
		{ name: "Solimo Coffee Beans 2 kg", price: 10.73, country: "Brazil", link: "img/best-goods/Solimo.jpg", id: 4 },
		{ name: "Presto Coffee Beans 1 kg", price: 15.99, country: "Brazil", link: "img/best-goods/Presto.jpg", id: 5 },
		{ name: "AROMISTICO Coffee 1 kg", price: 6.99, country: "Brazil", link: "img/best-goods/Aromistico.jpg", id: 6 }
	]

		const cardsInner = items.map((item) => {
			return (
				<a href="" key={item.id}>
					<div className="card">
						<img src={item.link} alt={item.name} />
						<h3 className='title'>{item.name}</h3>
						<div className="country">{ item.country}</div>
						<div className="price">{item.price}$</div>
					</div>
				</a>
			)
		})

	return (
		<div className="market">
			<div className="find-menu">
				<div className="search">
					<div>Looking for</div>
					<div className="input">
						<input type="text" placeholder="start typing here..." />
					</div>
				</div>
				
				<div className="filter">
					<div>Or filter</div>
					<div className="filters">
						<ul>
							<li key="Brazil"><button>Brazil</button></li>
							<li key="Kenya"><button>Kenya</button></li>
							<li key="Columbia"><button>Columbia</button></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="cards">
				{cardsInner}
			</div>
		</div>
	)
}

export default Market;