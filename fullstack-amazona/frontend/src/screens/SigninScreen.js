import {Helmet} from "react-helmet-async";
import {Form, FormGroup, FormLabel, FormControl, Button, Container} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

export default function SigninScreen() {
    const {search} = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    return (
        <Container className="small-container">
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <h1 className="my-3">Sign In</h1>
            <Form>
                <FormGroup class="mb-3" controlId="email">
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" required/>
                </FormGroup>
                <FormGroup class="mb-3" controlId="password">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" required/>
                </FormGroup>
                <div className="mb-3">
                    <Button type="submit">Sign in</Button>
                </div>
                <div className="mb-3">
                    New customer?{' '}
                    <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
                </div>
            </Form>
        </Container>
    )
}