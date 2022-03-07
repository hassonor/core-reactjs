import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Spinner from "./Spinner";
import Page404 from "./Page404";


export default function Detail({dispatch}) {
    const {id} = useParams();
    const navigate = useNavigate();
    const [sku, setSku] = useState("")
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
            <select id="size"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}>
                <option value="">What size?</option>
                {product.skus.map((s) => (
                    <option key={s.sku} value={s.sku}>{s.size}</option>
                ))}
            </select>
            <p>
                <button disabled={!sku} className="btn btn-primary" onClick={() => {
                    dispatch({type: "ADD_TO_CART", id, sku});
                    navigate("/cart")
                }}>Add to Cart
                </button>
            </p>
            <img src={`/images/${product.image}`} alt={product.category} width="300" height="300"/>
        </div>
    );

}