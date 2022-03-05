import Header from "./Header";
import Speakers from "./Speakers";
import Layout from "./Layout";
import {AuthProvider} from "../contexts/AuthContext";


const App = () => {
    return (
        <AuthProvider initialLoggedInUser="Hasson">
            <Layout startingTheme="light">
                <Header/>
                <Speakers/>

            </Layout>
        </AuthProvider>
    )
}

export default App;
