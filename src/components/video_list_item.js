import React from 'react'; 

// const VideoListItem = (props) => {
// 	const video = props.video; 
// 	return <li>Video</li>
// };

//refactored with es6
// const VideoListItem = ({video}) => {
// 	console.log(video); 
// 	return <li>Video</li>
// };

//using boostrap
const VideoListItem = ({video}) => {

	const imageUrl = video.snippet.thumbnails.default.url; 

	return (
		<li className="list-grou-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
					
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>

				
			</div> 

			

		</li>
	);
};
export default VideoListItem; 
