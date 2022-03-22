import React, {useState, useReducer, useEffect, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import styles from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../context/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
    switch (action.type) {
        case "EMAIL_INPUT":
            return {value: action.value, isValid: action.value.includes('@')};
        case "INPUT_BLUR":
            return {value: state.value, isValid: state.value.includes('@')};
        default:
            return state
    }
};

const passwordReducer = (state, action) => {
    switch (action.type) {
        case "PASSWORD_INPUT":
            return {value: action.value, isValid: action.value.trim().length > 6};
        case "INPUT_BLUR":
            return {value: state.value, isValid: state.value.trim().length > 6};
        default:
            return state
    }
};


const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: "", isValid: null});
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: "", isValid: null});

    const {onLogin} = useContext(AuthContext);


    const {isValid: emailIsValid} = emailState;
    const {isValid: passwordIsValid} = passwordState;

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                emailIsValid && passwordIsValid
            );
        }, 500)

        return () => {
            console.log("Cleanup")
            clearTimeout(identifier);
        }

    }, [emailIsValid, passwordIsValid])

    const emailChangeHandler = (event) => {
        dispatchEmail({type: "EMAIL_INPUT", value: event.target.value});

    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: "PASSWORD_INPUT", value: event.target.value});

    };

    const validateEmailHandler = () => {
        dispatchEmail({type: "INPUT_BLUR"});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: "INPUT_BLUR"});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={styles.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id="email"
                    label="Email"
                    type="email"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    ref={passwordInputRef}
                    id="password"
                    label="Password"
                    type="password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={styles.actions}>
                    <Button type="submit" className={styles.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
