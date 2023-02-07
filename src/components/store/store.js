import WholeHeader from "../header/whole-header"
import '../../App.scss';
import AboutStore from "./about-store/about-store";
import Footer from "../footer/footer";
import Market from "./market/market";

const Store = () => {
	return (
		<>
			<WholeHeader></WholeHeader>
			<div className="container">
				<AboutStore></AboutStore>
				<hr style={{ width: '240px' }} />
				<Market></Market>
				<Footer ></Footer>
			</div></>
	)
}

export default Store;