import Nav from "./nav";
import '../../App.scss';
import './whole-header.scss';

const WholeHeader = (props) => {
	return(
		<div className="header" style={{ backgroundImage: `url(${props.bg})`}}>
			<Nav></Nav>
			<h2>Our Coffee</h2>
		</div>
	)
}

export default WholeHeader;