import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const dummyMovies = [
        {
            id: 1,
            title: 'Jackass Forever',
            openingText: 'This is the opening text of the movie',
            releaseDate: '2022-03-01',
        },
        {
            id: 2,
            title: 'Batman Begins',
            openingText: 'This is the second opening text of the movie',
            releaseDate: '2022-02-02',
        },
    ];

    return (
        <React.Fragment>
            <section>
                <button>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={dummyMovies}/>
            </section>
        </React.Fragment>
    );
}

export default App;
