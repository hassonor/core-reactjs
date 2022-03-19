import React from 'react';
import useSpeakerDataManager from "./useSpeakerDataManager";


export const GlobalContext =
    React.createContext();


export const GlobalProvider = ({children}) => {
    const {
        isLoading,
        speakerList,
        favoriteClickCount,
        incrementFavoriteClickCount,
        toggleSpeakerFavorites,
        hasErrored,
        error,
        imageRerenderIdentifier,
        forceImageRerender
    } = useSpeakerDataManager();

    const provider = {
        isLoading,
        speakerList,
        favoriteClickCount,
        incrementFavoriteClickCount,
        toggleSpeakerFavorites,
        hasErrored,
        error,
        imageRerenderIdentifier,
        forceImageRerender
    }

    return (
        <GlobalContext.Provider value={provider}>
            {children}
        </GlobalContext.Provider>
    )
}