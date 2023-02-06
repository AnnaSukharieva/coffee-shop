import './header.scss';


const Header = () => {
	return (
		<div className="wrapper">
			<nav>
				<ul>
					<li key="coffee-house"> <a href="">Coffee house</a> </li>
					<li key="our-coffee"> <a href="">Our coffee</a> </li>
					<li key="for-your-pleasure"> <a href="">For your pleasure</a> </li>
				</ul>
			</nav>
		</div>
	)
}

export default Header;