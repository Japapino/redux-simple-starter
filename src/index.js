//go find the react libray in the react folder and assign it the name 'React'
import React from 'react';
import ReactDOM from 'react-dom'; 

//create new component. This component should make some html
const App = function() { 
	return <div>Hi!</div>
}

//Take this component's generated html and put it in the DOM

// ReactDOM.render(App); //App is a class, not an instance
// ReactDom.render(<App />); //We need an existing html node to render to
ReactDOM.render(<App />, document.querySelector('.container')); 