import {createRoot} from 'react-dom/client';
import styles from './index.css'


const Button = () => <button className={styles.button}>Click me!</button>

const container = document.getElementById('root');
const root = createRoot(container!);
console.log(styles);
root.render(<Button/>);



