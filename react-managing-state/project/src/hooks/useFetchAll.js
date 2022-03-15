import {useState, useEffect, useRef} from "react";

export default function useFetchAll(urls) {
    const prevUrlsRef = useRef([]);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // It will run Only when the array URLS passed were changed.
        if (areArraysEquals(prevUrlsRef.current, urls)) {
            setLoading(false);
            return;
        }


        prevUrlsRef.current = urls

        const promises = urls.map((url) =>
            fetch(process.env.REACT_APP_API_BASE_URL + url).then((response) => {
                if (response.ok) return response.json();
                throw response;
            })
        );

        Promise.all(promises)
            .then((json) => setData(json))
            .catch((e) => {
                console.error(e);
                setError(e);
            })
            .finally(() => setLoading(false));
    }, [urls]);

    return {data, loading, error};
}

function areArraysEquals(array1, array2) {
    return (
        array1.length === array2.length &&
        array1.every((value, index) => value === array2[index])
    );
}
