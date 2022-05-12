import {Alert, Spinner} from "react-bootstrap";

const LoadingBox = (props) => {
    return (<Spinner animation="border" role="status">
        <Alert variant={props.variant || 'info'}>{props.children}</Alert>
    </Spinner>)
}

export default LoadingBox;