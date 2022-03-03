import {createContext} from 'react';

const SpeakerContext = createContext();


const SpeakerProvider = ({children, speaker, updateRecord, insertRecord, deleteRecord}) => {
    return (
        <SpeakerContext.Provider value={{speaker, updateRecord, insertRecord, deleteRecord}}>
            {children}
        </SpeakerContext.Provider>
    )
}

export {SpeakerContext, SpeakerProvider};