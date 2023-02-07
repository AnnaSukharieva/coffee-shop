import './nav.scss';
import '../../App.scss'

const Nav = () => {
	return (
		<div className="wrapper">
			<nav>
				<ul>
					<li key="coffee-house"> <a href="/">Coffee house</a> </li>
					<li key="our-coffee"> <a href="/our-coffe">Our coffee</a> </li>
					<li key="for-your-pleasure"> <a href="/for-your-pleasure">For your pleasure</a> </li>
				</ul>
			</nav>
		</div>
	)
}

export default Nav;