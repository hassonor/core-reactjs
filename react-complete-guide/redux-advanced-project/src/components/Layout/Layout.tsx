import {FC, Fragment, ReactNode} from 'react';
import MainHeader from './MainHeader';

type Props = { children: ReactNode }

const Layout: FC<Props> = (props) => {
    return (
        <Fragment>
            <MainHeader/>
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
