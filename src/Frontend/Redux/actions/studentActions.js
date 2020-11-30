import { FETCH_STUDENTS, NEW_STUDENT } from "./types";

export const fetchStudents = () => (dispatch) => {
  console.log('I am fetching from local json now')
  fetch("./Redux/studentState.json", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => (console.log('we are comming')))
    .then((students) =>
      dispatch({
        type: FETCH_STUDENTS,
        payload: students,
      })
    );
};

export const createStudent = (studentData) => (dispatch) => {
  fetch("http://localhost:8080/admin/students", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(studentData),
  })
    .then((res) => res.json())
    .then((student) =>
      dispatch({
        type: NEW_STUDENT,
        payload: student,
      })
    );
};
