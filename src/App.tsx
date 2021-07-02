import React from 'react';
import './App.css';
import SearchMoviesForm from './components/searchMoviesForm';

const App: React.FC = () => (
	<div className='App w-full h-screen bg-gray-100 font-main'>
		<SearchMoviesForm />
	</div>
);

export default App;
