import classes from './Auth.module.css';
import {SyntheticEvent} from "react";
import {AuthLoginAction} from "../redux/AuthState";
import {useAppDispatch} from "../redux/hooks";

const Auth = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const loginHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(AuthLoginAction());

    }
    return (
        <main className={classes.auth}>
            <section>
                <form onSubmit={loginHandler}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email'/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password'/>
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
