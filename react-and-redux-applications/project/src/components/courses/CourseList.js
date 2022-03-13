import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CourseList = ({courses, onDeleteClick}) => (
        <table className="table">
            <thead>
            <tr>
                <th/>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th/>
            </tr>
            </thead>
            <tbody>
            {courses.map((course, index) => {
                return (
                    <React.Fragment key={`${course.id}_${index}`}>
                        <tr>
                            <td>
                                <a
                                    className="btn btn-light"
                                    href={"http://pluralsight.com/courses/" + course.slug}
                                    target="_blank" rel='noreferrer'
                                >
                                    Watch
                                </a>
                            </td>
                            <td>
                                <Link to={"/course/" + course.slug}>{course.title}</Link>
                            </td>
                            <td>{course.authorName}</td>
                            <td>{course.category}</td>
                            <td>
                                <button className="btn btn-outline-danger"
                                        onClick={() => onDeleteClick(course)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </React.Fragment>
                );
            })}
            </tbody>
        </table>
    )
;

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default CourseList;
