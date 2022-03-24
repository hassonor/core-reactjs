import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import axios, {AxiosError} from "axios";
import MovieModel from "./models/MovieModel";
import AddMovie from "./components/AddMovie";

function App(): JSX.Element {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("http://swapi.dev/api/films/");

            const moviesResponse = await response.data
            const transformedMovies = moviesResponse.results.map((movieData: MovieModel) => {
                return {
                    episode_id: movieData.episode_id,
                    title: movieData.title,
                    opening_crawl: movieData.opening_crawl,
                    release_date: movieData.release_date
                }
            })
            setMovies(transformedMovies);
        } catch (err) {
            const errors = err as Error | AxiosError;
            setError(errors.message);
        }

        setIsLoading(false);
    }, [])


    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler])

    function addMovieHandler(movie: MovieModel) {
        console.log(movie);
    }


    let content = <p>Found no movies.</p>;
    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>
    }

    if (error) {
        content = <p>{error}</p>
    }

    if (isLoading) {
        content = <p>Loading...</p>
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
