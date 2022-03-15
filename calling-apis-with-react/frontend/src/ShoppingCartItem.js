import React from "react";
import {useDispatch} from "react-redux";
import {updateCart, deleteCart} from "./CartHelper";

export default function ShoppingCartItem({event}) {
    const dispatch = useDispatch();
    return (
        <tr className="align-middle">
            <td>
                {new Date(event.date).toLocaleString()}<br/>{event.name}<br/>{event.artist}
            </td>
            <td className="max-50">
                ${event.price}
            </td>
            <td className="max-50">
                <div className="btn-group">
                    <input type="number" className="w-auto" value={event.quantity}
                           onChange={(e) => {
                               dispatch(updateCart(event.event_id, parseInt(e.target.value)))
                           }
                           }/>
                </div>
            </td>
            <td>
                ${event.quantity * event.price}
            </td>
            <td>
                <button className="btn btn-link" onClick={() => dispatch(deleteCart(event.event_id))}>
                    <span className="bi bi-trash-fill font-large text-dark"></span>
                </button>
            </td>
        </tr>
    );
}