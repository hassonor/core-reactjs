import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {loadCourses, saveCourse} from "../../redux/actions/courseActions";
import {loadAuthors} from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import {newCourse} from "../../tools/mockData";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";


export const ManageCoursePage = ({courses, authors, loadAuthors, loadCourses, saveCourse, ...props}) => {
    const navigate = useNavigate();
    const [course, setCourse] = useState({...props.course})
    const [errors, setErrors] = useState({})
    const [saving, setSaving] = useState(false);
    const {slug} = useParams();

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses().catch(error => {
                alert("Loading courses failed" + error);
            });
        } else {
            const course = getCourseBySlug(courses, slug)
            setCourse({...course});
        }

        if (authors.length === 0) {
            loadAuthors().catch(error => {
                alert("Loading authors failed" + error);
            });
        }

    }, [courses, authors, loadCourses, loadAuthors, slug]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }))
    }

    function formIsValid() {
        const {title, authorId, category} = course;
        const errors = {};

        if (!title) errors.title = "Title is required.";
        if (!authorId) errors.author = "Author is required";
        if (!category) errors.category = "Category is required";

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;
    }

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        setSaving(true);
        saveCourse(course)
            .then(() => {
                toast.success("Course were saved.");
                navigate("/courses");
            })
            .catch(error => {
                setSaving(false);
                setErrors({onSave: error.message});
            });
    }

    return authors.length === 0 || courses.length === 0 ? (
        <Spinner/>
    ) : (
        <CourseForm
            course={course}
            errors={errors}
            authors={authors}
            onChange={handleChange}
            onSave={handleSave}
            saving={saving}
        />
    );
}


ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    saveCourse: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired
};

export function getCourseBySlug(courses, slug) {
    return courses.find(course => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
    return {
        course: newCourse,
        courses: state.courses,
        authors: state.authors
    };
}

const mapDispatchToProps = {
    loadCourses,
    saveCourse,
    loadAuthors
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageCoursePage);
