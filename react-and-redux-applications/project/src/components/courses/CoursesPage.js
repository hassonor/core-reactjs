import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";

const CoursesPage = ({courses, authors, actions}) => {
    const navigate = useNavigate();
    useEffect(() => {

        actions.loadCourses().catch(error => {
            alert("Loading courses failed" + error);
        });


        actions.loadAuthors().catch(error => {
            alert("Loading authors failed" + error);
        });

    }, [courses.length, authors.length, actions])

    return (
        <>
            <h2>Courses</h2>
            <button style={{marginBottom: 20}} className="btn btn-primary add-course"
                    onClick={() => navigate("/course")}>
                Add Course
            </button>
            <CourseList courses={courses}/>
        </>
    );

}

CoursesPage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses:
            state.authors.length === 0
                ? []
                : state.courses.map(course => {
                    return {
                        ...course,
                        authorName: state.authors.find(a => a.id === course.authorId).name
                    };
                }),
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);
