import React from 'react';

/* Creation of the interfaces for the data returned from the fetch. This will be imported in the parent component. */
export interface Results {
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
export interface Data {
	page: number;
	results: Array<Results>;
	total_pages: number;
	total_results: number;
}

//  Declaration of the props type.
type Props = {
	results: number;
	movies: Results[];
};

const FoundMovies: React.FC<Props> = (props) => {
	const { results, movies } = props;

	/* This function checks the results. In case the results fills more than a page (20 results) it will tell the user.  */
	function checkPages() {
		if (results > 20) {
			const JSXResults: JSX.Element = (
				<p className='text-lg ml-4 -mb-8 text-black text-opacity-75'>
					Results found: {results}. Only showing the first 20.
				</p>
			);
			return JSXResults;
		}
		if (results === 0) {
			const JSXResults: JSX.Element = <></>;
			return JSXResults;
		}
		const JSXResults: JSX.Element = (
			<p className='text-lg ml-4 -mb-8 text-black text-opacity-75'>
				Results found: {results}.
			</p>
		);
		return JSXResults;
	}

	/* This functions changes the format of the date from YYYY-MM-DD to DD-MM-YYYY. */
	function formatDate(originalReleaseDate: string) {
		const splitDate: string[] = originalReleaseDate.split('-');
		const newFormattedDate: string = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
		return newFormattedDate;
	}

	return (
		<section>
			{checkPages()}
			{movies
				.filter((movie: Results) => movie.poster_path)
				.map((movie: Results, index: number) => (
					<div
						className={`movie-${index} w-screen p-4 shadow-xl mt-10 bg-white text-black text-opacity-75`}
						key={movie.id}
					>
						<img
							alt={`${movie.title} poster.`}
							src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
							className='mb-4 block m-auto shadow-lg'
						/>
						<h1 className='mb-4 text-4xl cursor-pointer'>
							<a href={`https://www.themoviedb.org/movie/${movie.id}`}>
								{movie.title}
							</a>
						</h1>
						<p className='my-1 text-lg'>
							Release Date: {formatDate(movie.release_date)}
						</p>
						<p className='my-1 text-lg'>Rating: {movie.vote_average}</p>
						<p className='my-4 text-lg'>{movie.overview}</p>
					</div>
				))}
		</section>
	);
};

export default FoundMovies;
