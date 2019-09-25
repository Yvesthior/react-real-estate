import React, { Component } from 'react';

class Listings extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	loopListings() {
		let { listingsData } = this.props;
		if (listingsData == undefined || listingsData.length == 0)
			return 'Sorry, No results for your research';
		return listingsData.map((data, index) => {
			if (this.props.globalState.view == 'box') {
				// BoX VIEW
				return (
					<div className="col-md-3" key={index}>
						<div className="listing">
							<div
								className="listing-img"
								style={{
									background: `url('${data.image}') no-repeat center center`
								}}
							>
								<span className="address">{data.address}</span>
								<div className="details">
									<div className="col-md-3">
										<div className="user-img"></div>
									</div>
									<div className="col-md-9">
										<div className="user-details">
											<span className="user-name">Nina Smith</span>
											<span className="post-date">05/05/2019</span>
										</div>
										<div className="listing-details">
											<div className="floor-space">
												<i className="far fa-square"></i>
												<span>{data.floorSpace} ft&sup2;</span>
											</div>
											<div className="bedrooms">
												<i className="fa fa-bed"></i>
												<span>{data.rooms} Bedrooms</span>
											</div>
										</div>
										<div className="view-btn">View Listing</div>
									</div>
								</div>
							</div>
							<div className="bottom-info">
								<span className="price">${data.price}</span>
								<span className="location">
									<i className="fa fa-map-marker" aria-hidden="true"></i>
									{data.city}, {data.state}
								</span>
							</div>
						</div>
					</div>
				);
			} else {
				//LONG VIEW
				return (
					<div className="col-md-12 col-lg-6" key={index}>
						<div className="listing">
							<div
								className="listing-img"
								style={{
									background: `url('${data.image}') no-repeat center center`
								}}
							>
								<span className="address">{data.address}</span>
								<div className="details">
									<div className="col-md-3">
										<div className="user-img"></div>
									</div>
									<div className="col-md-9">
										<div className="user-details">
											<span className="user-name">Nina Smith</span>
											<span className="post-date">05/05/2019</span>
										</div>
										<div className="listing-details">
											<div className="floor-space">
												<i className="far fa-square"></i>
												<span>{data.floorSpace} ft&sup2;</span>
											</div>
											<div className="bedrooms">
												<i className="fa fa-bed"></i>
												<span>{data.rooms} Bedrooms</span>
											</div>
										</div>
										<div className="view-btn">View Listing</div>
									</div>
								</div>
							</div>
							<div className="bottom-info">
								<span className="price">${data.price}</span>
								<span className="location">
									<i className="fa fa-map-marker" aria-hidden="true"></i>
									{data.city}, {data.state}
								</span>
							</div>
						</div>
					</div>
				);
			}
		});
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<section id="listings">
				<section className="search-area">
					<input
						type="text"
						name="search"
						placeholder="Enter Here Your Research"
						onChange={this.props.change}
					/>
				</section>

				<section className="sortby-area">
					<div className="results">
						{this.props.globalState.filteredData.length} results found
					</div>
					<div className="sort-options">
						<select
							name="sortby"
							className="sortby"
							onChange={this.props.change}
						>
							<option value="price-asc">Lowest Price</option>
							<option value="price-dsc">Highest Price</option>
						</select>

						<div className="view">
							<i
								className="fas fa-list-ul"
								onClick={this.props.changeView.bind(null, 'long')}
							></i>
							<i
								className="fas fa-th"
								onClick={this.props.changeView.bind(null, 'box')}
							></i>
						</div>
					</div>
				</section>

				<section className="listing-results">
					<div className="row">{this.loopListings()}</div>
				</section>

				<section className="pagination">
					<div className="row">
						<ul className="pages">
							<li>Prev</li>
							<li className="active">1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
							<li>Next</li>
						</ul>
					</div>
				</section>
			</section>
		);
	}
}

export default Listings;
