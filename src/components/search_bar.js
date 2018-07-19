// import React from 'react'; 
import React, {Component} from 'react'; 

//functional component version
// const SearchBar = () => {
// 	return <input />;
// };

//class component version
// class SearchBar extends React.Component{
// 	render() {
// 		return <input />;
// 	}
// }

//cleaner version
// class SearchBar extends Component{
// 	render() {
// 		return <input onChange={this.onInputChange} />;
// 	}

// 	onInputChange(event) { 
// 		console.log(event); 
// 	}
// }

//With arrow function 
class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {term: ''};
	}
	render() {
					//we can drop the curly braces since we are using a single line
		return <input onChange={(event) => console.log(event.target.value)} />;
	}
}
export default SearchBar; 