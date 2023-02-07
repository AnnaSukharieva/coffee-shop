import Nav from "./nav";
import '../../App.scss';
import './whole-header.scss';

const WholeHeader = () => {
	return(
		<div className="header">
			<Nav></Nav>
			<h2>Our Coffee</h2>
		</div>
	)
}

export default WholeHeader;