import './filters.scss';

const Filters = (props) => {

	const { setSearch, setFilter, filter} = props

	return (
		<div className="find-menu">
			<div className="search">
				<div>Looking for</div>
				<div className="input">
					<input onChange={setSearch} type="text" placeholder="start typing here..." />
				</div>
			</div>

			<div className="filter">
				<div>Or filter</div>
				<div className="filters">
					<ul onClick={setFilter}>
						<li className={filter === "Brazil" ? "selected" : ''} key="Brazil"><button name="Brazil" >Brazil</button></li>
						<li className={filter === "Kenya" ? "selected" : ''} key="Kenya"><button name="Kenya">Kenya</button></li>
						<li className={filter === "Columbia" ? "selected" : ''} key="Columbia"><button name="Columbia">Columbia</button></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Filters;