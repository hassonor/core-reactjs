import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Spinner from "./Spinner";
import Page404 from "./Page404";


export default function Detail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: product, error, loading} = useFetch(`products/${id}`);


    if (loading) {
        return <Spinner/>
    }
    if (!product) return <Page404/>
    if (error) throw error;
    return (
        <div id="detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p id="price">${product.price}</p>
            <p>
                <button className="btn btn-primary" onClick={() => navigate("/cart")}>Add to Cart</button>
            </p>
            <img src={`/images/${product.image}`} alt={product.category} width="300" height="300"/>
        </div>
    );

}