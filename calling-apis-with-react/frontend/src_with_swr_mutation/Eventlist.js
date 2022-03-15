import React, {useEffect} from "react";
import useSWR from "swr";
import Eventitem from "./Eventitem";
import {fetcher} from "./SwrHelper";
import {useDispatch} from "react-redux";

export default function Eventlist() {
  const {data, error} = useSWR("http://localhost:3003/events", fetcher);

  const dispatch = useDispatch();

  if (error) {
    throw error;
  }

  useEffect(() => {
    if (error) {
      dispatch({type: "ERROR_SET", error: error});
    }
  }, [error]);

  if (!data) {
    return (
        <div className="container mt-5">Loading ...</div>
    );
  }

  return (
      <div className="container" id="eventtable">
        <div className="container">
          <table className="table mt-5">
            <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {
              data.map(event => (
                  <Eventitem event={event} key={event.id}/>
              ))
            }
            </tbody>
          </table>
        </div>
      </div>
  );
}