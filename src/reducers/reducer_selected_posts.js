import _ from 'lodash';
import {
    SELECT_POST,
    DESELECT_POST
} from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_POST: {
            return [...state, action.payload];
        }
        case DESELECT_POST: {
            return _.without(state, action.payload);
        }
        default:
            return state;
    }
}