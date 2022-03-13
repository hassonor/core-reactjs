import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";

const CoursesPage = ({courses, authors, actions, loading}) => {
    const navigate = useNavigate();
    useEffect(() => {

        actions.loadCourses().catch(error => {
            alert("Loading courses failed" + error);
        });


        actions.loadAuthors().catch(error => {
            alert("Loading authors failed" + error);
        });

    }, [courses.length, authors.length, actions])

    const handleDeleteCourse = async (course) => {
        toast.success("Course were deleted");
        try {
            await actions.deleteCourse(course);
        } catch (error) {
            toast.error("Delete failed." + error.message, {autoClose: false});
        }
      
    }

    return (
        <>
            <h2>Courses</h2>
            {loading ? <Spinner/> : (<>
                <button style={{marginBottom: 20}} className="btn btn-primary add-course"
                        onClick={() => navigate("/course")}>
                    Add Course
                </button>
                <CourseList onDeleteClick={handleDeleteCourse} courses={courses}/></>)}

        </>
    );

}

CoursesPage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
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
        authors: state.authors,
        loading: state.apiCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
            deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);
