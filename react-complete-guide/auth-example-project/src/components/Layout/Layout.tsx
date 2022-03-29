import {FC, Fragment, ReactNode} from 'react';

import MainNavigation from './MainNavigation';

type Props = { children: ReactNode }
const Layout: FC<Props> = ({children}) => {
    return (
        <Fragment>
            <MainNavigation/>
            <main>{children}</main>
        </Fragment>
    );
};

export default Layout;
