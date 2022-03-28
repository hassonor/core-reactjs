import {FC, Fragment, ReactNode} from 'react';

import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

type Props = { children: ReactNode }

const Layout: FC<Props> = ({children}) => {
    return (
        <Fragment>
            <MainNavigation/>
            <main className={styles.main}>{children}</main>
        </Fragment>
    );
};

export default Layout;