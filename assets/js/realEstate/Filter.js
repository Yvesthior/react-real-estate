import React, { Component } from 'react';

class Filter extends Component {
	UNSAFE_componentWillMount() {
		this.props.populateAction();
	}

	cities() {
		let { cities } = this.props.globalState.populateFormsData;
		if (cities != undefined) {
			return cities.map(item => {
				return (
					<option value={item} key={item}>
						{item}
					</option>
				);
			});
		}
	}

	homeTypes() {
		let { homeTypes } = this.props.globalState.populateFormsData;
		if (homeTypes != undefined) {
			return homeTypes.map(item => {
				return (
					<option value={item} key={item}>
						{item}
					</option>
				);
			});
		}
	}

	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filter</h4>
					<label htmlFor="city">City</label>
					<select
						name="city"
						className="filters city"
						onChange={this.props.onchange}
					>
						<option value="All">All</option>
						{this.cities()}
					</select>

					<label htmlFor="homeType">Home Type</label>
					<select
						name="homeType"
						className="filters homeType"
						onChange={this.props.onchange}
					>
						<option value="All">All Homes</option>
						{this.homeTypes()}
					</select>

					<label htmlFor="bedrooms">Bedrooms</label>
					<select
						name="bedrooms"
						className="filters bedrooms"
						onChange={this.props.onchange}
					>
						<option>Bedrooms</option>
						<option value="0">0+ BR</option>
						<option value="1">1+ BR</option>
						<option value="2">2+ BR</option>
						<option value="3">3+ BR</option>
						<option value="4">4+ BR</option>
					</select>

					<div className="filters price">
						<span className="title">Price</span>
						<input
							type="text"
							name="min_price"
							value={this.props.globalState.min_price}
							className="min-price"
							onChange={this.props.onchange}
						/>
						<input
							type="text"
							name="max_price"
							value={this.props.globalState.max_price}
							className="max-price"
							onChange={this.props.onchange}
						/>
					</div>
					<div className="filters floor-space">
						<span className="title">Floor Space</span>
						<input
							type="text"
							name="min_floor_space"
							value={this.props.globalState.min_floor_space}
							className="min-floor-space"
							onChange={this.props.onchange}
						/>
						<input
							type="text"
							name="max_floor_space"
							value={this.props.globalState.max_floor_space}
							className="max-floor-space"
							onChange={this.props.onchange}
						/>
					</div>

					<div className="filters extras">
						<span className="title">Extras</span>
						<label htmlFor="elevator">
							<span>Elevators</span>
							<input
								type="checkbox"
								value="elevator"
								name="elevator"
								onChange={this.props.onchange}
							/>
						</label>
						<label htmlFor="exswimming_pooltras">
							<span>Swimming Pool</span>
							<input
								type="checkbox"
								value="swimming_pool"
								name="swimming_pool"
								onChange={this.props.onchange}
							/>
						</label>
						<label htmlFor="finished_basement">
							<span>Finished Basement</span>
							<input
								type="checkbox"
								value="finished_basement"
								name="finished_basement"
								onChange={this.props.onchange}
							/>
						</label>
						<label htmlFor="gym">
							<span>Gym</span>
							<input
								type="checkbox"
								value="gym"
								name="gym"
								onChange={this.props.onchange}
							/>
						</label>
					</div>
				</div>
			</section>
		);
	}
}

export default Filter;
