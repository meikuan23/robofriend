import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from '../robots.js';
import Scroll from '../components/Scroll.js'
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

//STATE -> description of your application == object that describe your application
// state is able to change the value of the search box (value of the input), able to change what robot array means, what gets display
// props -> things that come out of state
// parent feeds state into a child component, and child receive the property and cannot change it
// parent passes the state into different component
// state is something that can be changed

// const state = {
// 	robots: robots,
// 	searchfield: '',
// }; integrate into App2 class as this.state

class App2 extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		};
		// console.log('constructor');
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !robots.length ?
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f2'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}

export default App2;