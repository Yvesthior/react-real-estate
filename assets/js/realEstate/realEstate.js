import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import listingsData from './data/ListingData';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe',
			listingsData,
			city: 'All',
			homeType: 'All',
			bedrooms: 0,
			min_price: 0,
			max_price: 100000000,
			min_floor_space: 0,
			max_floor_space: 15000,
			gym: false,
			finished_basement: false,
			swimming_pool: false,
			elevator: false,
			filteredData: listingsData,
			populateFormsData: [],
			sortby: 'price-dsc',
			view: 'box',
			search: ''
		};
	}
	UNSAFE_componentWillMount() {
		let listingsData = this.state.listingsData.sort((a, b) => {
			return a.price - b.price;
		});
		this.setState({
			listingsData
		});
	}

	populateForms = () => {
		//City
		let cities = this.state.listingsData.map(item => {
			return item.city;
		});
		cities = new Set(cities);
		cities = [...cities].sort();

		//HomeType
		let homeTypes = this.state.listingsData.map(item => {
			return item.homeType;
		});
		homeTypes = new Set(homeTypes);
		homeTypes = [...homeTypes].sort();

		//Bedrooms
		let bedrooms = this.state.listingsData.map(item => {
			return item.rooms;
		});
		bedrooms = new Set(bedrooms);
		bedrooms = [...bedrooms];

		this.setState({
			populateFormsData: {
				homeTypes,
				bedrooms,
				cities
			}
		});
	};

	change = event => {
		let name = event.target.name;
		let value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;
		this.setState(
			{
				[name]: value
			},
			() => {
				this.filteredData();
				console.log(this.state);
			}
		);
	};

	filteredData = () => {
		let newData = this.state.listingsData.filter(item => {
			return (
				item.price >= this.state.min_price &&
				item.price <= this.state.max_price &&
				item.floorSpace >= this.state.min_floor_space &&
				item.floorSpace <= this.state.max_floor_space &&
				item.rooms >= this.state.bedrooms
			);
		});

		if (this.state.city != 'All') {
			newData = newData.filter(item => {
				return item.city == this.state.city;
			});
		}
		if (this.state.homeType != 'All') {
			newData = newData.filter(item => {
				return item.homeType == this.state.homeType;
			});
		}

		if (this.state.sortby == 'price-asc') {
			newData = newData.sort((a, b) => {
				return a.price - b.price;
			});
		}

		if (this.state.sortby == 'price-dsc') {
			newData = newData.sort((a, b) => {
				return b.price - a.price;
			});
		}
		if (this.state.search != '') {
			let { search } = this.state;
			newData = newData.filter(item => {
				let city = item.city.toLowerCase();
				let searchText = this.state.search.toLowerCase();
				let n = city.match(searchText);

				if (n != null) return true;
			});
		}
		if (this.state.elevator == true) {
			newData = newData.filter(item => {
				return item.extra.includes('elevator');
			});
		}

		if (this.state.gym == true) {
			newData = newData.filter(item => {
				return item.extra.includes('gym');
			});
		}

		if (this.state.finished_basement == true) {
			newData = newData.filter(item => {
				return item.extra.includes('elevafinished_basementtor');
			});
		}

		if (this.state.swimming_pool == true) {
			newData = newData.filter(item => {
				return item.extra.includes('swimming_pool');
			});
		}

		this.setState({
			filteredData: newData
		});
	};

	changeView = viewName => {
		this.setState({
			view: viewName
		});
	};

	render() {
		return (
			<div>
				<Header />
				<section id="content-area">
					<Filter
						onchange={this.change}
						globalState={this.state}
						populateAction={this.populateForms}
					/>
					<Listings
						listingsData={this.state.filteredData}
						globalState={this.state}
						changeView={this.changeView}
						change={this.change}
					/>
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
