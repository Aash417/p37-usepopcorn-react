import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from "./starRating";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		{/* <StarRating
			maxRating={5}
			message={["terrible", "bad", "ok", "good", "best"]}
		/>
		<StarRating maxRating={5} defaultRating={3} /> */}
	</React.StrictMode>
);

// function Test() {
// 	const [rated, setRated] = useState(0);
// 	return (
// 		<div>
// 			<StarRating color="red" maxRating={10} onSetRating={setRated} />
// 			<p>this movie is rated {rated}</p>
// 		</div>
// 	);
// }
