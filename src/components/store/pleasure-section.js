import WholeHeader from "../header/whole-header"
import '../../App.scss';
import AboutStore from "./about-store/about-store";
import Footer from "../footer/footer";
import Market from "./market/market";

const PleasureSection = (props) => {
	return (
		<>
			<WholeHeader bg="img/header_bg_2.png"></WholeHeader>
			<div className="container">
				<AboutStore title={props.title} link={props.link} alt={props.alt}></AboutStore>
				<hr style={{ width: '240px' }} />
				<Market products={props.products}></Market>
				<Footer ></Footer>
			</div></>
	)
}

export default PleasureSection;