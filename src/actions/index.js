import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POSTS_ERROR = 'fetch_posts_error';

const API_KEY = '?key=constatine';
const BASE_URL = 'http://reduxblog.herokuapp.com/api';


const fetchPostsSuccess = (data) => {
    return {
        type: FETCH_POSTS,
        payload: data
    };
}

const fetchPostsError = (err) => {
    return {
        type: FETCH_POSTS_ERROR,
        err: err
    };
}

export const fetchPosts = () => {
    const url = `${BASE_URL}/posts${API_KEY}`;
    return (dispatch) => {
        axios.get(url)
            .then(data => dispatch(fetchPostsSuccess(data)))
            .catch(err => dispatch(fetchPostsError(err)));
    };

}