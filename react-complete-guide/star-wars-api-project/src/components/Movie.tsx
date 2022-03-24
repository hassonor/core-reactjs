import React from 'react';

import styles from './Movie.module.css';
import MovieModel from "../models/MovieModel";

interface MovieProps {
    movie: MovieModel;
}

const Movie = (props: MovieProps): JSX.Element => {
    return (
        <li className={styles.movie}>
            <h2>{props.movie.title}</h2>
            <h3>{props.movie.releaseDate}</h3>
            <p>{props.movie.openingText}</p>
        </li>
    );
};

export default Movie;
