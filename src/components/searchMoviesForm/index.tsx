/* Imports React, useState, the children component and the interfaces. */
import React, { useState } from 'react';
import FoundMovies, { Results, Data } from '../foundMovies';

const SearchMoviesForm: React.FC = () => {
	/* Creation of the states. */
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState<Results[]>([]);
	const [results, setResults] = useState(0);

	/* Personal string to access the movie DB API. We will use it later on line 46. */
	const theMovieDBAPI: string = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${query}&include_adult=false`;

	/* This function will be called each time the user presses the "Search" button. (Sends the form) */
	async function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			//	If the user tries to send the form with a blank input, it will show a console error and NOT execute the fetch.
			if (query === undefined || query === '') {
				console.error('Type some movie name in the input.');
			} else {
				/* In case the input has a value different than '' it will clear the console, execute the fetch and update the results and movies states. */
				console.clear();
				const res: Response = await fetch(theMovieDBAPI);
				const data: Data = await res.json();
				setMovies(data.results);
				setResults(data.total_results);
			}
		} catch (error) {
			console.error(error);
		}
	}

	/* This function will be executed every time the user modifies the value of the input. */
	function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setQuery(event.target.value);
	}

	return (
		<section className='w-screen'>
			<form onSubmit={onSubmitHandler}>
				<h1 className='my-4 text-3xl underline text-center w-screen text-black'>
					Movie Search App
				</h1>
				<div className='w-screen'>
					<label
						htmlFor='movieSearchBar'
						className='text-left mx-12 my-1 text-sm uppercase'
					>
						Movie Name
					</label>
					<input
						name='movieSearchBar'
						type='text'
						placeholder='e.g. Avatar'
						value={query}
						onChange={onChangeHandler}
						className='block w-3/4 mx-auto text-left border-3 border-gray-800 bg-white pl-4 py-2 rounded-3xl leading-2'
					/>
				</div>
				<button
					type='submit'
					className='block w-3/4 mx-auto my-4 bg-black bg-opacity-75 text-white color rounded-3xl p-1.5'
				>
					Search
				</button>
			</form>
			<FoundMovies results={results} movies={movies} />
		</section>
	);
};

export default SearchMoviesForm;
