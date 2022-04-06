import classes from './ProfileForm.module.css';
import {SyntheticEvent, useContext, useRef} from "react";
import {useNavigate} from 'react-router-dom';
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
    const newPasswordInputRef = useRef<HTMLInputElement | null>(null);
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
            navigate("/")

        })
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input {...{type: "password", id: 'new-password', minLength: 7}} ref={newPasswordInputRef}/>
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;
