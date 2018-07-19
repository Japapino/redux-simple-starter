//go find the react libray in the react folder and assign it the name 'React'
//libraries
import React from 'react';
import ReactDOM from 'react-dom'; 

//files
import SearchBar from './components/search_bar.js'; 

const API_KEY = 'AIzaSyCaGjnK_MBXANQrTSjA1tIE1HspBr2fEUk';

//create new component. This component should make some html

// const App = function() { 
// 	return <div>Hi!</div>
// }

//using es6 arrow functions. The function of 'this' is slightly different here
const App = () => { 
	return (
		<div>
		<SearchBar /> 
	</div>
	);
}
//Take this component's generated html and put it in the DOM

// ReactDOM.render(App); //App is a class, not an instance
// ReactDom.render(<App />); //We need an existing html node to render to
ReactDOM.render(<App />, document.querySelector('.container')); 