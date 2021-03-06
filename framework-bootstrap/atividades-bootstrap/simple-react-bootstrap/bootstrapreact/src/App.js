import React, {Component} from 'react'
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/header/header'
import Home from './components/home/home'
import Table from './components/table/table'
import About from './components/about/about'

export default class App extends Component{
	
	render(){
		return (
			<div className="App">
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact={true} path="/" component={Home}/>
						<Route exact={true} path="/table" component={Table}/>
						<Route exact={true} path="/about" component={About}/>
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}	


