import React from 'react';

interface Props {
	movieName: string;
}

const searchMoviesForm: React.FC<Props> = () => (
	<section className='w-screen overflow-auto'>
		<form>
			<h1 className='my-4 text-3xl underline text-center w-screen'>
				Movie Search App
			</h1>
			<div className='w-screen'>
				<p className='text-left text-xl mx-12 my-2'>Movie Name</p>
				<input
					type='text'
					placeholder='Movie Name'
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
export default searchMoviesForm;
