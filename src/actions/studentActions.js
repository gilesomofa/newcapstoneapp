import { FETCH_STUDENTS, NEW_STUDENT } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createStudent = studentData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(studentData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_STUDENT,
        payload: post
      })
    );
};