import _ from 'lodash';
import { FETCH_POSTS, GET_POST, DELETE_POST } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_POST: {
            // const post = action.payload.data;
            // const newState = {...state}
            // newState[post.id] = post;
            // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data };
        }
        case FETCH_POSTS: {
            return _.mapKeys(action.payload.data, 'id');
        }
        case DELETE_POST: {
            return _.omit(state, action.payload);
        }

        default:
            return state;
    }

}