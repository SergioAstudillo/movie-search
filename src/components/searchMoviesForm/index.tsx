import React, { useState } from 'react';

const searchMoviesForm: React.FC = () => {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([{}]);
	const [results, setResults] = useState(0);

	const theMovieDBAPI: string = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${query}&include_adult=false`;

	async function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			const res = await fetch(theMovieDBAPI);
			const data = await res.json();
			setMovies(data.results);
			setResults(data.total_results);
		} catch (error) {
			console.error(error);
		}
	}

	function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setQuery(event.target.value);
	}

	return (
		<section className='w-screen'>
			<form onSubmit={onSubmitHandler}>
				<h1 className='my-4 text-3xl underline text-center w-screen'>
					Movie Search App
				</h1>
				<div className='w-screen'>
					<p className='text-left text-xl mx-12 my-2'>Movie Name</p>
					<input
						type='text'
						placeholder='Movie Name'
						value={query}
						onChange={onChangeHandler}
						className='block w-3/4 mx-auto text-left border-3 border-gray-800 bg-white p-1.5 pl-5 rounded-3xl'
					/>
				</div>
				<button
					type='submit'
					className='block w-3/4 mx-auto my-4 bg-gray-800 text-white color rounded-3xl p-1.5'
				>
					Search
				</button>
			</form>
			<section>
				<p>Results found: {results}</p>
				{movies
					.filter((movie: any) => movie.poster_path)
					.map((movie: any, index: number) => (
						<div className={`movie-${index}`} key={movie.id}>
							<img
								alt={`${movie.title} poster.`}
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
							/>
							<h1>{movie.title}</h1>
							{/* Release Date Format = YYYY-MM-DD */}
							<p>Release Date: {movie.release_date}</p>
							<p>Rating: {movie.vote_average}</p>
							<p>{movie.overview}</p>
						</div>
					))}
			</section>
		</section>
	);
};
export default searchMoviesForm;
