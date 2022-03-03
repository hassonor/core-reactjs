import {useState, useEffect} from "react";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
};

const useRequestDelay = (delayInMs = 900, initialData = []) => {

    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
    const [error, setError] = useState("");


    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayInMs)
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                setData(data);
            } catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                setError(e)
            }
        }

        delayFunc()
    }, []);

    const updateRecord = (recordUpdated) => {
        const newRecords = data.map((rec) => {
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });

        async function delayFunction() {
            try {
                await delay(1)
                setData(newRecords)
            } catch (error) {
                console.log("Error thrown inside delayFunction", error)
            }
        }

        delayFunction()

    }

    return {data, requestStatus, error, updateRecord}
}

export default useRequestDelay;

