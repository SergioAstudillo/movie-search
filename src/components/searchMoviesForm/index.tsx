import React, { useState } from 'react';


const searchMoviesForm: React.FC = () => {
	const [query, setQuery] = useState('');

	const theMovieDBAPI: string = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&page=1&language=en-US&query=${query}&include_adult=false`

	async function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			const res = await fetch(theMovieDBAPI);
			const data = await res.json()
			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}

	function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setQuery(event.target.value)
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
		</section>
		);
}
export default searchMoviesForm;
