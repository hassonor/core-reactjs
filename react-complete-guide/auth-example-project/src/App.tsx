import {Routes, Navigate, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from "./store/auth-context";
import {useContext} from "react";

function App(): JSX.Element {
    const authCtx = useContext(AuthContext);
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route
                    path="/auth"
                    element={authCtx.isLoggedIn ? <Navigate to="/" replace/> : <AuthPage/>}
                />
                <Route path="/profile"
                       element={
                           authCtx.isLoggedIn ? <UserProfile/> : <Navigate to="/auth" replace/>
                       }
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace/>}
                />
            </Routes>
        </Layout>
    );
}

export default App;
