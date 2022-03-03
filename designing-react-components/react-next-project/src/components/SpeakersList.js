import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestDelay, {REQUEST_STATUS} from "../hooks/useRequestDelay";
import {data} from "../../SpeakerData";

const SpeakerList = ({showSessions}) => {

    const {
        data: speakerData,
        requestStatus,
        error,
        updateRecord
    } = useRequestDelay(580, data)


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
                {speakerData.map(speaker => {
                    return (
                        <Speaker key={speaker.id} speaker={speaker}
                                 showSessions={showSessions} onFavoriteToggle={() => {
                            updateRecord({
                                ...speaker,
                                favorite: !speaker.favorite
                            })
                        }}/>
                    )
                })}
            </div>
        </ReactPlaceHolder>
    </div>)
}

export default SpeakerList;