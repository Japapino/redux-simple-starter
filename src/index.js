//go find the react libray in the react folder and assign it the name 'React'
//libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search'; 

//files
import SearchBar from './components/search_bar.js'; 

const API_KEY = 'AIzaSyCaGjnK_MBXANQrTSjA1tIE1HspBr2fEUk';



//create new component. This component should make some html

// const App = function() { 
// 	return <div>Hi!</div>
// }

//using es6 arrow functions. The function of 'this' is slightly different here
class App extends Component {

	constructor(props) {
		super(props); 

		this.state = { videos: [] }; 

		YTSearch({key: API_KEY, term: 'surfboards'}, (data) =>  {
			this.setState({ videos: data })

		});


		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>  {
			this.setState({ videos });
			
		});
	}

	render() { 
		return (
			<div>
			<SearchBar /> 
		</div>
		);
	}
}
//Take this component's generated html and put it in the DOM

// ReactDOM.render(App); //App is a class, not an instance
// ReactDom.render(<App />); //We need an existing html node to render to
ReactDOM.render(<App />, document.querySelector('.container')); 