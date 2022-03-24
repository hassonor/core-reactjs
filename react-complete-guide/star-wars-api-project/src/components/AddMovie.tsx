import styles from './AddMovie.module.css';
import MovieModel from "../models/MovieModel";
import {useForm} from "react-hook-form";


function AddMovie(props: any): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<MovieModel>();

    async function addMovieHandler(movie: MovieModel) {
        try {
            props.onAddMovie(movie);

        } catch (err) {
            alert("Error: " + err);
        }
    }

    return (
        <form onSubmit={handleSubmit(addMovieHandler)}>
            <div className={styles.control}>
                <label htmlFor='title'>Title</label>
                <input type="text" id='title' name="title" autoFocus {...register('title',
                    {required: true})}/>
                {errors.title && <p>Title is required.</p>}
            </div>
            <div className={styles.control}>
                <label htmlFor='opening-text'>Opening Text</label>
                <textarea name="opening_crawl"  {...register('opening_crawl', {required: true})}/>
            </div>
            <div className={styles.control}>
                <label htmlFor='date'>Release Date</label>
                <input type="text" id='date' name="release_date"
                       autoFocus {...register('release_date', {required: true})}/>
            </div>
            <button>Add Movie</button>
        </form>
    );
}

export default AddMovie;

