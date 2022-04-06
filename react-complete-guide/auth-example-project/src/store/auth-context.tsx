import React, {FC, ReactNode, useState} from 'react';

interface AuthContextType {
    token: string;
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

type Props = { children: ReactNode }

export const AuthContextProvider: FC<Props> = ({children}) => {
    const [token, setToken] = useState(null)
    const userIsLoggedIn = !!token;

    const loginHandler = (token: string) => {
        setToken(token);
    }

    const logoutHandler = () => {
        setToken(null);
    }

    const contextValue = {
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider
            value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;