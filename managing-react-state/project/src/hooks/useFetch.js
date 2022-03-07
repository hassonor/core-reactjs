import {useState, useEffect, useRef} from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;


export default function useFetch(url) {
    const isMountedRef = useRef(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function init() {
            isMountedRef.current = true;
            try {
                const response = await fetch(baseUrl + url)

                if (response.ok) {
                    const json = await response.json();
                    if (isMountedRef.current)
                        setData(json);
                } else {
                    throw response;
                }
            } catch (e) {
                if (isMountedRef.current)
                    setError(e);
            } finally {
                if (isMountedRef.current)
                    setLoading(false);
            }
        }

        init();

        // Called when unmounted.
        return () => {
            isMountedRef.current = false;
        }
    }, [url])

    return {data, error, loading};
}