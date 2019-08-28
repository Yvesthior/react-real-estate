import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
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
			<header>
				<div className="logo">Logo</div>
				<nav>
					<a href="#">create ads</a>
					<a href="#">About Us</a>
					<a href="#">Log in</a>
					<a href="#" className="register-btn">
						register
					</a>
				</nav>
			</header>
		);
	}
}

export default Header;
