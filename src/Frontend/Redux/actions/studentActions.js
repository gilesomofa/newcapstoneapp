import { FETCH_STUDENTS, NEW_STUDENT } from "./types";

export const fetchStudents = () => (dispatch) => {
  fetch("http://localhost:4001/admin", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((students) =>
      dispatch({
        type: FETCH_STUDENTS,
        payload: students,
      })
    );
};

export const createStudent = (studentData) => (dispatch) => {
  fetch("http://localhost:4001/admin/students", {
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
