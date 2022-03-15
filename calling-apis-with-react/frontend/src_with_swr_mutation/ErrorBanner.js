import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ErrorBanner() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const isClosed = useSelector(state => state.isClosed);

  let handleCloseClick = () => {
    dispatch({ type: "ERROR_CLOSE" });
  };

  return (
    error && !isClosed &&  
    <div className="alert alert-warning p-5">
      <p className="lead">{ error.message }</p>
      <button type="button" id="btnClose"
                            onClick={handleCloseClick}
                            className="btn btn-primary btn-primary-themed btn-md font-upper">Close</button>
    </div>
  );
}