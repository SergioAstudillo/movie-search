# <u>Movie Search Web App:</u>

Movie search app that shows coincident movies using the movieDB API, Typescript, React and TailwindCSS.

### <u>Description:</u>

SPA made to quickly search movies from [TMDb](https://www.themoviedb.org/documentation/api) (The Movie Database).
It uses [React](https://reactjs.org/) to manipulate the DOM and update it each time a change is detected.

The styling has been done using [TailwindCSS](https://tailwindcss.com/), it's a (mobile first) CSS framework. Thanks to the breakpoints (sm, md, lg, xl, 2xl) that Tailwind offers I made the web fully responsive much faster than with SCSS/CSS.

Everything on the app has been made with [TypeScript](https://www.typescriptlang.org/), an open-source language that lets developers have a better control of their apps.

### <u>How to test/execute the app?:</u>

First, you must create a .env file in the root of the project, inside this file you should type your TMDb API key using the following format:

###### `REACT_APP_MOVIE_DB_API_KEY=YOUR_API_KEY`

Once you have set up your API key as a env variable you can execute the following command in the root folder:

###### `yarn start` OR `npm start`

This command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) once you execute the command to view it in the browser. (It usually opens automatically a new tab in your default browser once you use the command).

### More Info:

<small>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).</small>
