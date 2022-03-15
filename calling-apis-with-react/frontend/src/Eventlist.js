import React, {useState} from "react";
import {useQuery} from "react-query";
import Eventitem from "./Eventitem";
import {getEvents} from "./EventHelper";

export default function Eventlist() {
    const [page, setPage] = useState(1);
    const {isLoading, data} = useQuery(["events", page], () => getEvents(page));


    if (isLoading) {
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
                        data.data.rows.map(event => (
                            <Eventitem event={event} key={event.id}/>
                        ))
                    }
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colSpan="3" className="text-center">
                            <button
                                className="btn btn-primary btn-primary-themed btn-md font-upper"
                                disabled={page === 1}
                                onClick={() => setPage(Math.max(1, page - 1))}>
                                Previous
                            </button>
                        </th>
                        <th colSpan="3">
                            <button
                                className="btn btn-primary btn-primary-themed btn-md font-upper"
                                disabled={!data.data.hasMore}
                                onClick={() => setPage(page + 1)}>
                                Next
                            </button>
                        </th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}