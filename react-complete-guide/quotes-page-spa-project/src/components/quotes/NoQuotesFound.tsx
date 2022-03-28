import {Link} from 'react-router-dom';

import styles from './NoQuotesFound.module.css';

const NoQuotesFound = (): JSX.Element => {
    return (
        <div className={styles.noquotes}>
            <p>No quotes found!</p>
            <Link className='btn' to='/new-quote'>
                Add a Quote
            </Link>
        </div>
    );
};

export default NoQuotesFound;