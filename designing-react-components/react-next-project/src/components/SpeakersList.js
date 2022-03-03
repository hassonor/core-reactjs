import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestDelay, {REQUEST_STATUS} from "../hooks/useRequestDelay";
import {data} from "../../SpeakerData";
import {useContext} from "react";
import {SpeakerFilterContext} from "../contexts/SpeakerFilterContext";

const SpeakerList = ({showSessions}) => {

    const {
        data: speakerData,
        requestStatus,
        error,
        updateRecord
    } = useRequestDelay(580, data)

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
                            <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions}
                                     onFavoriteToggle={(doneCallback) => {
                                         updateRecord({
                                             ...speaker,
                                             favorite: !speaker.favorite
                                         }, doneCallback)
                                     }}/>
                        )
                    })}
            </div>
        </ReactPlaceHolder>
    </div>)
}

export default SpeakerList;