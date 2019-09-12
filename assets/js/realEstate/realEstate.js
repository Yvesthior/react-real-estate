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
			min_price: 0,
			max_price: 10000000,
			min_floor_space: 0,
			max_floor_space: 15000,
			gym: false,
			finished_basement: false,
			swimming_pool: false,
			elevator: false
		};
	}

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
			() => console.log(this.state)
		);
	};

	render() {
		return (
			<div>
				<Header />
				<section id="content-area">
					<Filter onchange={this.change} globalState={this.state} />
					<Listings listingsData={this.state.listingsData} />
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
