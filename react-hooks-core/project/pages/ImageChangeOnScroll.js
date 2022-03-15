import React, {useState, useEffect} from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
    const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
    const [mouseEventCount, setMouseEventCount] = useState(0);

    useEffect(() => {
        window.document.title = `SpeakerId: ${currentSpeakerId}`;
        console.log(`useEffect: setting title to ${currentSpeakerId}`)
    }, [currentSpeakerId])

    return (
        <div>
            <span>mouseEventCnt: ${mouseEventCount}</span>
            {[1124, 187, 823, 1269, 1530].map((speakerId) => {
                return (
                    <div key={speakerId}
                         onMouseOver={() => {
                             setCurrentSpeakerId(speakerId);
                             setMouseEventCount((prevState) => prevState + 1);
                             console.log(`onMouseOver:${speakerId}`)
                         }}>
                        <ImageToggleOnScroll
                            primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
                            secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
                            alt=""
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageChangeOnScroll;
