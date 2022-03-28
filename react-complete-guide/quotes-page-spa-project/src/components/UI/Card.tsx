import styles from './Card.module.css';
import {FC, ReactNode} from "react";

type Props = { children: ReactNode }
const Card: FC<Props> = ({children}) => {
    return <div className={styles.card}>{children}</div>;
};

export default Card;