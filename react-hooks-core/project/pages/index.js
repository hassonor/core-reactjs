import React, {useState} from "react";

const InputElement = () => {
    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);
    return (
        <>
            <input value={inputText} onChange={(e) => {
                setInputText(e.target.value);
                setHistoryList([...historyList, e.target.value]);
            }} placeholder="Enter Some Text"/>
            <br/>
            {inputText}
            <hr/>
            <br/>
            <ul>
                {historyList && historyList.map((input, index) => <div key={index}>{input}</div>)}
            </ul>
        </>)
}

export default InputElement;