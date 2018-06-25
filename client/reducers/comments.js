import axios from 'axios';
import  history  from '../history';
/**
 * ACTION TYPES
 */
const GET_COMMENTS = 'GET_COMMENTS';

/**
 * ACTION CREATORS
 */
const getComments = comments => ({ type: GET_COMMENTS, comments });


/**
 * THUNK CREATORS
 */
export const getCommentsThunk = () => dispatch => {
  return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(json => {
      //console.log(json)
      return dispatch(getComments(json))
    }) 
    .catch(err => console.error(`Fetching orders unsuccessful`, err));
};

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments;
    default:
      return state;
  }
}