import {Fragment} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import QuoteItem from './QuoteItem';
import styles from './QuoteList.module.css';
import QuoteModel from "../../model/QuoteModel";

const sortQuotes = (quotes: QuoteModel[], ascending: boolean) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};

interface QuoteListProps {
    quotes: QuoteModel[];
}

const QuoteList = (props: QuoteListProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const isSortingAscending = queryParams.get('sort') === 'asc';

    const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

    const changeSortingHandler = () => {
        navigate({
            pathname: location.pathname,
            search: `sort=${isSortingAscending ? 'desc' : 'asc'}`
        });
    };

    return (
        <Fragment>
            <div className={styles.sorting}>
                <button onClick={changeSortingHandler}>
                    Sort {isSortingAscending ? 'Descending' : 'Ascending'}
                </button>
            </div>
            <ul className={styles.list}>
                {sortedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default QuoteList;