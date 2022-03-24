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
            const response = await axios.get(`${process.env.REACT_APP_FIREBASE_DB_URL}`);

            const data = await response.data
            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].movie.title,
                    opening_crawl: data[key].movie.opening_crawl,
                    release_date: data[key].movie.release_date
                });
            }


            setMovies(loadedMovies)

            setMovies(loadedMovies);
        } catch (err) {
            const errors = err as Error | AxiosError;
            setError(errors.message);
        }

        setIsLoading(false);
    }, [])


    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler])

    async function addMovieHandler(movie: MovieModel) {
        try {


            const response = await axios.post(`${process.env.REACT_APP_FIREBASE_DB_URL}`, {movie});
            const data = await response.data;
            console.log(data);
        } catch (err) {
            const errors = err as Error | AxiosError;
            setError(errors.message);
        }
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
