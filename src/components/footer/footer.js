import Nav from '../header/nav';
import '../../App.scss';
import './footer.scss';
import Grains from '../grains-devider/grains-devider';

const Footer = () => {
	return (
		<div className='container footer'>
			<Nav></Nav>
			<Grains></Grains>
		</div>
	)
}

export default Footer;