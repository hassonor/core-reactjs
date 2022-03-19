import speakersReducer from "./speakersReducer";
import {useEffect, useReducer, useContext, useRef} from "react";
import axios from 'axios';

import {InitialSpeakersDataContext} from "../pages/speakers";

function useSpeakerDataManager() {
    const initialSpeakersData = useContext(InitialSpeakersDataContext);
    const isMountedRef = useRef(false);
    const [{
        isLoading,
        speakerList,
        favoriteClickCount,
        hasErrored,
        error,
        imageRerenderIdentifier
    }, dispatch] = useReducer(speakersReducer, {
        isLoading: false,
        speakerList: initialSpeakersData,
        favoriteClickCount: 0,
        hasErrored: false,
        error: null
    });

    function incrementFavoriteClickCount() {
        dispatch({type: 'incrementFavoriteClickCount', favoriteClickCount})
    }

    function forceImageRerender() {
        dispatch({type: 'forceImageRerender'})
    }

    function toggleSpeakerFavorites(speakerRec) {
        const updateData = async function () {
            axios.put(`/api/speakers/${speakerRec.id}`, {...speakerRec, favorite: !speakerRec.favorite});
            speakerRec.favorite === true ?
                dispatch({type: "unfavorite", id: speakerRec.id}) :
                dispatch({type: "favorite", id: speakerRec.id})
        }
        updateData();

    }

    useEffect(() => {
        const fetchData = async function () {
            isMountedRef.current = true;
            try {
                let result = await axios.get('/api/speakers')
                if (isMountedRef.current) {
                    dispatch({type: 'setSpeakerList', data: result.data});
                }

            } catch (e) {
                if (isMountedRef.current)
                    dispatch({type: 'errored', error: e})
            }
        }
        fetchData()
        return () => {
            console.log('cleanup');
        };

    }, []); // [speakingSunday, speakingSaturday]);

    return {
        isLoading, speakerList, favoriteClickCount, incrementFavoriteClickCount,
        toggleSpeakerFavorites, hasErrored, error, forceImageRerender, imageRerenderIdentifier,
    };
}

export default useSpeakerDataManager;