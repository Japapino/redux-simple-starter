//go find the react libray in the react folder and assign it the name 'React'
//libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search'; 
import VideoDetail from './components/video_detail.js'

//files
import SearchBar from './components/search_bar.js'; 
import VideoList from './components/video_list.js'; 
const API_KEY = 'AIzaSyCaGjnK_MBXANQrTSjA1tIE1HspBr2fEUk';



//create new component. This component should make some html
class App extends Component {

	constructor(props) {
		super(props); 

		//default state, the property name we can make anything. 'Videos' in this case. 
		this.state = { 
			videos: [],
			selectedVideo: null 
		}; 

		// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) =>  {
		// 	this.setState({ videos: data })

		// });

		//changed to an arrow function
		//runs the youtube api search, when it completes it will update the state
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>  {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
				});
		});
	}

	render() { 
		return (

			//passing video list from the app parent class to the video list object. Passing Props
			<div>
				<SearchBar /> 
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}
//Take this component's generated html and put it in the DOM

// ReactDOM.render(App); //App is a class, not an instance
// ReactDom.render(<App />); //We need an existing html node to render to
ReactDOM.render(<App />, document.querySelector('.container')); 