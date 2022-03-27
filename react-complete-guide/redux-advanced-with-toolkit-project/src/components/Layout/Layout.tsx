import {FC, Fragment, ReactNode} from 'react';
import MainHeader from './MainHeader';

type Props = { children: ReactNode }

const Layout: FC<Props> = ({children}) => {
    return (
        <Fragment>
            <MainHeader/>
            <main>{children}</main>
        </Fragment>
    );
};

export default Layout;
