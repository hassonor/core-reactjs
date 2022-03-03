import {data} from "../../SpeakerData";
import {useState, useEffect} from "react";


const useRequestSpeakers = (delayInMs = 900) => {

    const [speakerData, setSpeakerData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");


    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayInMs)
                setIsLoading(false);
                setSpeakerData(data);
            } catch (e) {
                setIsLoading(false)
                setHasErrored(true);
                setError(e)
            }
        }

        delayFunc()
    }, []);

    function onFavoriteToggle(id) {
        const speakersRecPrevious = speakerData.find(function (rec) {
            return rec.id === id;
        })
        const speakerRecUpdated = {
            ...speakersRecPrevious,
            favorite: !speakersRecPrevious.favorite
        }
        const speakerDataNew = speakerData.map(function (rec) {
            return rec.id === id ? speakerRecUpdated : rec;
        })

        setSpeakerData(speakerDataNew)
    }

    return {speakerData, isLoading, hasErrored, error, onFavoriteToggle}
}

export default useRequestSpeakers;

