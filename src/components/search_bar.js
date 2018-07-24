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
	//initialize state
	constructor(props){
		super(props); //calls Component's constructor method, must have this

		this.state = {term: ''}; //we set the name of the first property to term.
								// This updates the term property to what the value of the input is
								//this is the only time we will set the state like this. Everywhere else
								//we will use this.setState
	}

	render() {
					//we can drop the curly braces since we are using a single line
		return (
			<div>
				<input onChange={(event) => this.setState({term: event.target.value })} /> 
			</div>

			//as a controlled state
			// <div>
				// <input
					// value={this.state.term}
					// onChange={event => this.setState({ term: event.target.value})} />
			// </div>		
		);
	}
}
export default SearchBar; 