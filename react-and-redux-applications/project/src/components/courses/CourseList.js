import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CourseList = ({courses}) => (
        <table className="table">
            <thead>
            <tr>
                <th/>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>
            {courses.map(course => {
                return (
                    <React.Fragment key={course.id}>
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
                        </tr>
                    </React.Fragment>
                );
            })}
            </tbody>
        </table>
    )
;

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;
