import {SyntheticEvent, useState, useRef} from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
        const emailInputRef = useRef<HTMLInputElement | null>(null);
        const passwordInputRef = useRef<HTMLInputElement | null>(null);
        const [isLogin, setIsLogin] = useState(true);
        const [isLoading, setIsLoading] = useState(false);

        const switchAuthModeHandler = () => {
            setIsLogin((prevState) => !prevState);
        };

        const handleSubmit = (e: SyntheticEvent) => {
            e.preventDefault();
            const enteredEmail = emailInputRef.current.value;
            const enteredPassword = passwordInputRef.current.value;

            // optional -> Add Validations
            setIsLoading(true)
            let url;
            if (isLogin) {
                url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
            } else {
                url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
            }
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    setIsLoading(false);
                    if (res.ok) {
                        return res.json();
                    } else {
                        return res.json().then((data) => {
                            let errorMessage = 'Authentication failed!';
                            throw new Error(errorMessage);
                        });
                    }
                })
                .then((data) => {
                    console.log(data.idToken);
                })
                .catch((err) => {
                    alert(err.message);
                });
        };
        return (
            <section className={classes.auth}>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={handleSubmit}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' required ref={emailInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Your Password</label>
                        <input type='password' id='password' required ref={passwordInputRef}/>
                    </div>
                    <div className={classes.actions}>
                        {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                        {isLoading && <p>Sending request...</p>}
                        <button
                            type='button'
                            className={classes.toggle}
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                    </div>
                </form>
            </section>
        );
    }
;

export default AuthForm;
