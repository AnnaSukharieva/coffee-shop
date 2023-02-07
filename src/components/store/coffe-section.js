import WholeHeader from "../header/whole-header"
import '../../App.scss';
import AboutStore from "./about-store/about-store";
import Footer from "../footer/footer";
import Market from "./market/market";
import Filters from "./filter/filters";
import { Component } from "react";

class CoffeeSection extends Component{
	constructor(props) {
		super(props);
		this.state = {
			filter: "",
			search: ""
		}
	}

	setFilter = (e) => {
		e.preventDefault();
		this.setState({
			filter: e.target.name
		})
	}

	setSearch = (e) => {
		e.preventDefault();
		this.setState({
			search: e.target.value
		})
	}

	render() {
		return (
			<div>
				<WholeHeader bg="img/header_bg.jpg"></WholeHeader>
				<div name="wrapper" onClick={this.setFilter}>
					<div className="container">
						<AboutStore title="About our beans" link="img/store/girl-about.jpg" alt="Girl with a cap of coffee"></AboutStore>
						<hr style={{ width: '240px' }} />
						<Filters filter={this.state.filter} setFilter={this.setFilter} setSearch={this.setSearch}></Filters>
						<Market products={this.props.products} filter={this.state.filter} setSearch={this.state.setSearch}></Market>
						<Footer ></Footer>
					</div>
				</div>
			</div>
		)
	}
}

export default CoffeeSection;