import React, { Component } from 'react';

class Listings extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<section className="listings">
				<section className="search-area">
					<input type="text" name="search" />
				</section>

				<section className="sortby-area">
					<div>390 results found</div>
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

				<section className="listing-results">
					<div className="listings">
						<div className="listing-img">
							<span>Address</span>
							<div className="details">
								<div className="user-img"></div>
								<div classsName="user-details">
									<span className="user-name">Nina Smith</span>
									<span className="post-date">05/05/2019</span>
								</div>
								<div className="listing-details">
									<div className="floor-space">
										<i className="far fa-square"></i>1000 ft&sup2;
									</div>
									<i clasNames="fas fa-bed"></i>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pagination"></section>
			</section>
		);
	}
}

export default Listings;
