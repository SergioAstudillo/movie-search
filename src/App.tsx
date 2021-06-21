import React from 'react';
import './App.css';
import SearchMoviesForm from './components/searchMoviesForm';

const App: React.FC = () => (
	<div className='App w-screen h-screen bg-gray-100 font-main'>
		<SearchMoviesForm movieName='' />
	</div>
);

export default App;
