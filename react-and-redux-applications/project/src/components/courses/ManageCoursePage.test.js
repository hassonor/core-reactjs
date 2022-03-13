import React from "react";
import {mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import {authors, newCourse, courses} from "../../tools/mockData.js";
import {ManageCoursePage} from "./ManageCoursePage";


function render(args) {
    const defaultProps = {
        authors,
        courses,
        // Passed from React Router in real app, so just stubbing in for test.
        // Could also choose to use MemoryRouter as shown in Header.test.js,
        // or even wrap with React Router, depending on whether I
        // need to test React Router related behavior.
        saveCourse: jest.fn(),
        loadAuthors: jest.fn(),
        loadCourses: jest.fn(),
        course: newCourse,
    };

    const props = {...defaultProps, ...args};

    return mount(<MemoryRouter><ManageCoursePage {...props} /></MemoryRouter>);
}

it("sets error when attempting to save an empty title field", () => {
    const wrapper = render();
    wrapper.find("form").simulate("submit");
    const error = wrapper.find(".alert").first();
    expect(error.text()).toBe("Title is required.");
});


