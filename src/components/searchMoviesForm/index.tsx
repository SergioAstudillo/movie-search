import React, { useState } from 'react';
/* import MoviesResult from '../moviesResult'; */

const SearchMoviesForm: React.FC = () => {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState<Results[]>([]);
	const [results, setResults] = useState(0);

	const theMovieDBAPI: string = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${query}&include_adult=false`;

	interface Results {
		adult: boolean;
		backdrop_path: string | null;
		genre_ids: number[] | [];
		id: number;
		original_language: string;
		original_title: string;
		overview: string;
		popularity: number;
		poster_path: string | null;
		release_date: string;
		title: string;
		video?: boolean;
		vote_average: number;
		vote_count: number;
	}
	interface Data {
		page: number;
		results: Array<Results>;
		total_pages: number;
		total_results: number;
	}

	async function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			if (query === undefined || query === '') {
				console.error('Introduzca algún valor en el campo.');
			} else {
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

	function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setQuery(event.target.value);
	}

	function checkPages() {
		if (results > 20) {
			const JSXResults: JSX.Element = (
				<p>Results found: {results}. Only showing the first 20.</p>
			);
			return JSXResults;
		}
		const JSXResults: JSX.Element = <p>Results found: {results}.</p>;
		return JSXResults;
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
				{checkPages()}
				{movies
					.filter((movie: Results) => movie.poster_path)
					.map((movie: Results, index: number) => (
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
export default SearchMoviesForm;
