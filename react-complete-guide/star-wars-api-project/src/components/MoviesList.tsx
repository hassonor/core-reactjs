import React from 'react';

import Movie from './Movie';
import styles from './MoviesList.module.css';
import MovieModel from "../models/MovieModel";


interface MovieListProps {
    movies: MovieModel[];
}

const MovieList = (props: MovieListProps): JSX.Element => {

    return (
        <ul className={styles['movies-list']}>
            {props.movies.map((movie) => (
                <Movie
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </ul>
    );
};

export default MovieList;
