import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App(): JSX.Element {
    return (
        <Layout>
            <Routes>
                <Route path="/welcome" element={<HomePage/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
                <Route path="/profile" element={<UserProfile/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
