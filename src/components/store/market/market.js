import './market.scss';
import { Component } from 'react';

class Market extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visibleItems: props.products
		}
	}

	render() {
		let prevCardsInner = this.props.products;
		if (this.props.filter === "Brazil" || this.props.filter === "Kenya" || this.props.filter === "Columbia") {
			prevCardsInner = this.props.products.filter(item => item.country === this.props.filter)
		}

		if (this.props.search) {
			prevCardsInner = this.props.products.filter(item => {
				if (item.name.toLowerCase().includes(this.props.search.toLowerCase())) {
					return item
				}
			})
		}
		const cardsInner = prevCardsInner.map((item) => {
			return (
				<a href="" key={item.id}>
					<div className="card">
						<img src={item.link} alt={item.alt} />
						<h3 className='title'>{item.name}</h3>
						<div className="country">{item.country}</div>
						<div className="price">{item.price}$</div>
					</div>
				</a>
			)
		});



		return (
			<div className="market">
				<div className="cards">
					{cardsInner}
				</div>
			</div>
		)
	}
}

export default Market;