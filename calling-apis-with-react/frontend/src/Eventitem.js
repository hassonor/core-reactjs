import React from "react";
import {useDispatch} from "react-redux";
import {useMutation} from "react-query";
import {addCart} from "./CartHelper";

export default function Eventitem({event}) {
    const dispatch = useDispatch();
    const mutation = useMutation(
        id => dispatch(addCart(id)),
        {
            onSuccess: () => {
                setTimeout(() => {
                    mutation.reset();
                }, 2000);
            }
        }
    )
    return (
        <tr className="align-middle">
            <td>
                <img className="img-fluid max-100" src={event.imgUrl} alt="Cover"/>
            </td>
            <td className="max-50">
                {new Date(event.date).toLocaleString()}
            </td>
            <td className="max-50">
                {event.name}
            </td>
            <td className="max-50">
                {event.artist}
            </td>
            <td className="max-50">
                ${event.price}
            </td>
            <td className="max-50">
                <button type="button" className="btn btn-primary btn-primary-themed btn-md font-upper"
                        onClick={() => mutation.mutate(event.id)}>Add to
                    Cart
                </button>
                {mutation.isSuccess ? <span className="bi bi-bag-check-fill font-xxl ms-2 fadeout"></span> :
                    <span className="bi bi-bag-check-fill text-white font-xxl ms-2 fadeout"></span>}
            </td>
        </tr>
    );
}