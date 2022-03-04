import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestRest, {REQUEST_STATUS} from "../hooks/useRequestRest";

import {useContext} from "react";
import {SpeakerFilterContext} from "../contexts/SpeakerFilterContext";
import SpeakerAdd from "./SpeakerAdd";

const SpeakerList = () => {

    const {
        data: speakerData,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord
    } = useRequestRest();

    const {searchQuery, eventYear} = useContext(SpeakerFilterContext);

    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
            <div className="text-danger">
                ERROR: <b> loading Speaker Data Failed {error}</b>
            </div>
        )
    }

    return (<div className="container speakers-list">
        <ReactPlaceHolder
            type="media"
            rows={18}
            className="speakerslist-placeholder"
            ready={requestStatus === REQUEST_STATUS.SUCCESS}
        >
            <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord}/>
            <div className="row">
                {speakerData
                    .filter((speaker) => {
                        return (
                            speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            speaker.last.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                    })
                    .filter((speaker) => {
                        return speaker.sessions.find((session) => {
                            return session.eventYear === eventYear
                        });
                    })
                    .map(speaker => {
                        return (
                            <Speaker
                                key={speaker.id}
                                speaker={speaker}
                                updateRecord={updateRecord}
                                insertRecord={insertRecord}
                                deleteRecord={deleteRecord}
                            />
                        )
                    })}
            </div>
        </ReactPlaceHolder>
    </div>)
}

export default SpeakerList;