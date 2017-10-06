import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POSTS_ERROR = 'fetch_posts_error';
export const CREATE_POSTS = 'create_posts';
export const CREATE_POSTS_ERROR = 'create_posts_error';
export const GET_POST = 'get_post';
export const GET_POST_ERROR = 'get_post_error';
export const DELETE_POST = 'delete_post';
export const DELETE_POST_ERROR = 'delete_post_error';

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
    return async (dispatch) => {
        try {
            const data = await axios.get(url);
            dispatch(fetchPostsSuccess(data));
        } catch (err) {
            dispatch(fetchPostsError(err));
        }
    };

}

const createPostsSuccess = (request) => {
    return {
        type: CREATE_POSTS,
        payload: request
    };
}

const createPostsError = (err) => {
    return {
        type: CREATE_POSTS_ERROR,
        err: err
    };
}

export const createPosts = (values, cb) => {
    const url = `${BASE_URL}/posts${API_KEY}`;

    return async (dispatch) => {
        try {
            const data = await axios.post(url, values);
            dispatch(createPostsSuccess(data));
            cb();
        } catch (err) {
            dispatch(createPostsError(err));
        }
    };
}


const getPostSuccess = (request) => {
    return {
        type: GET_POST,
        payload: request
    };
}

const getPostsError = (err) => {
    return {
        type: GET_POST_ERROR,
        err: err
    };
}

export const getPost = (id) => {
    const url = `${BASE_URL}/posts/${id}${API_KEY}`;

    return async (dispatch) => {
        try {
            const data = await axios.get(url);
            dispatch(getPostSuccess(data));
        } catch (err) {
            dispatch(getPostsError(err));
        }
    };
}


const deletePostSuccess = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    };
}

const deletePostsError = (err) => {
    return {
        type: DELETE_POST_ERROR,
        err: err
    };
}

export const deletePost = (id, cb) => {
    const url = `${BASE_URL}/posts/${id}${API_KEY}`;

    return async (dispatch) => {
        try {
            await axios.delete(url);
            dispatch(deletePostSuccess(id));
            cb();
        } catch (err) {
            dispatch(deletePostsError(err));
        }
    };
};
