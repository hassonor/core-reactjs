import classes from './Notification.module.css';
import NotificationModel from "../../models/NotificationModel";

interface NotificationProps {
    notification: NotificationModel;
}

const Notification = (props: NotificationProps): JSX.Element => {
    let specialClasses = '';

    if (props.notification.status === 'error') {
        specialClasses = classes.error;
    }
    if (props.notification.status === 'success') {
        specialClasses = classes.success;
    }

    const cssClasses = `${classes.notification} ${specialClasses}`;

    return (
        <section className={cssClasses}>
            <h2>{props.notification.title}</h2>
            <p>{props.notification.message}</p>
        </section>
    );
};

export default Notification;