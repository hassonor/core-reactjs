import Speaker from "./Speaker";

const SpeakerList = ({data, showSessions}) => {
    return (<div className="container speakers-list">
        <div className="row">
            {data.map(speaker => {
                return (
                    <Speaker key={speaker.id} speaker={speaker}
                             showSessions={showSessions}/>
                )
            })}
        </div>
    </div>)
}

export default SpeakerList;