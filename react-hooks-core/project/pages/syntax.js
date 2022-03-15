import React, {useEffect, useState} from "react";


const Syntax = () => {
    const [checkBoxChecked, setCheckBoxChecked] = useState(false);
    useEffect(() => {
        console.log('in useEffect');
        return () => {
            console.log('in useEffect Cleanup');
        }
    }, [checkBoxChecked])

    return (
        <div></div>
    );

}

export default Syntax;