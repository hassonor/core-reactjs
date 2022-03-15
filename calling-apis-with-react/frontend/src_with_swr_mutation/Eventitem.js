import React from "react";
import { addCart } from "./CartHelper";

export default function Eventitem({ event }) {
  return (
    <tr className="align-middle">
      <td>
        <img className="img-fluid max-100" src={event.imgUrl} alt="Cover" />
      </td>
      <td className="max-50">
        { new Date(event.date).toLocaleString() }
      </td>
      <td className="max-50">
        { event.name }
      </td>
      <td className="max-50">
        { event.artist }
      </td>
      <td className="max-50">
        ${ event.price }
      </td>
      <td className="max-50">
        <button type="button" className="btn btn-primary btn-primary-themed btn-md font-upper" 
          onClick={() => addCart(event.id)}>Add to
              Cart</button>
      </td>
    </tr>
  );
}