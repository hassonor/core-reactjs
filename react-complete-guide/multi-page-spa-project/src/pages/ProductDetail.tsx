import {useParams} from "react-router-dom";

const ProductDetail = (): JSX.Element => {
    const params = useParams()
    console.log(params.id);
    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.id}</p>
        </section>
    )
}

export default ProductDetail;