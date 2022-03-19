import React, {useContext} from 'react';
import SignMeUp from './SignMeUp';
import {GlobalContext} from "./GlobalState";

export const Header = () => {
    const signupCallback = (email) => {
        return console.log(`sign up called with email ${email}`);
    };

    const {favoriteClickCount} = useContext(GlobalContext);

    return (
        <div className="jumbotron jumbotronheight">
            <div className="row">
                <div className="col-12 col-sm-4 text-center">
                    <h6 className="text-uppercase">February 27-02-2022</h6>
                    <h6 className="text-uppercase">Tel Aviv, israel</h6>
                    <h3>Click Count {favoriteClickCount}</h3>
                </div>
                <div className="col-12 col-sm-8 text-lg-right">
                    <h2>Or Hasson Code Camp</h2>
                    <div className="row col-12 text-lg-right">
                        <SignMeUp signupCallback={signupCallback}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
