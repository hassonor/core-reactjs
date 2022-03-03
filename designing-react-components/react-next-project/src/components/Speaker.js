import {useContext, useState} from "react";
import {SpeakerFilterContext} from "../contexts/SpeakerFilterContext";

function Session({title, room}) {

    return (
        <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
    );
}

function Sessions({sessions}) {
    const {eventYear} = useContext(SpeakerFilterContext);
    return (
        <div className="sessionBox card h-250">
            {sessions.filter((session) => {
                return session.eventYear === eventYear
            }).map((session) => {
                return <div className="session w-100" key={session.id}>
                    <Session {...session}/>
                </div>
            })}
        </div>
    );
}

function SpeakerImage({id, first, last}) {
    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                className="contain-fit"
                src={`/images/speaker-${id}.jpg`}
                width="300"
                alt={`${first} ${last}`}
            />
        </div>
    );
}

function SpeakerFavorite({favorite, onFavoriteToggle}) {
    const [inTransition, setInTransition] = useState(false);
    const doneCallback = () => {
        setInTransition(false);
        console.log(`In SpeakerFavorite:doneCallback ${new Date().getMilliseconds()}`);
    }
    return (
        <div className="action padB1">
            <span onClick={function () { // make closure
                setInTransition(true);
                return onFavoriteToggle(doneCallback);
            }}>

                <i className={
                    favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
                }/>{" "}
                Favorite{" "}
                {inTransition && <span className="fas fa-circle-notch fa-spin"></span>}
            </span>
        </div>
    )
}

const SpeakerDemographics = ({
                                 first,
                                 last,
                                 bio,
                                 company,
                                 twitterHandle,
                                 favorite,
                                 onFavoriteToggle
                             }) => {
    return (
        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {first} {last}
                </h3>
            </div>
            <SpeakerFavorite
                favorite={favorite}
                onFavoriteToggle={onFavoriteToggle}/>
            <div>
                <p className="card-description">{bio}</p>
                <div className="social d-flex flex-row mt-4">
                    <div className="company">
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Speaker = ({speaker, onFavoriteToggle}) => {
    const {showSessions} = useContext(SpeakerFilterContext);
    const {id, first, last, sessions} = speaker;
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
                <SpeakerImage id={id} first={first} last={last}/>
                <SpeakerDemographics {...speaker} onFavoriteToggle={onFavoriteToggle}/>
            </div>
            {showSessions === true ? <Sessions sessions={sessions}/> : null}
        </div>
    );
}

export default Speaker;
