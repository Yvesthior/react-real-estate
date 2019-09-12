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
		return listingsData.map((data, index) => {
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
		});
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<section id="listings">
				<section className="search-area">
					<input type="text" name="search" />
				</section>

				<section className="sortby-area">
					<div className="results">390 results found</div>
					<div className="sort-options">
						<select name="sortby" className="sortby">
							<option value="price-asc">Highest Price</option>
							<option value="price-dsc">Lowest Price</option>
						</select>

						<div className="view">
							<i className="fas fa-list-ul"></i>
							<i className="fas fa-th"></i>
						</div>
					</div>
				</section>

				<section className="listing-results">{this.loopListings()}</section>

				<section className="pagination">
					<ul className="pages">
						<li>Prev</li>
						<li className="active">1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>Next</li>
					</ul>
				</section>
			</section>
		);
	}
}

export default Listings;
