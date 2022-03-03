import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestSpeakers from "../hooks/useRequestSpeakers";

const SpeakerList = ({showSessions}) => {

    const {
        speakerData, isLoading, hasErrored, error, onFavoriteToggle
    } = useRequestSpeakers(580)


    if (hasErrored === true) {
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
            ready={isLoading === false}
        >
            <div className="row">
                {speakerData.map(speaker => {
                    return (
                        <Speaker key={speaker.id} speaker={speaker}
                                 showSessions={showSessions} onFavoriteToggle={() => {
                            onFavoriteToggle(speaker.id)
                        }}/>
                    )
                })}
            </div>
        </ReactPlaceHolder>
    </div>)
}

export default SpeakerList;