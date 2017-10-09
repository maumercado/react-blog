import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import selectedPostIds from './reducer_selected_posts';


const rootReducer = combineReducers({
    posts: PostsReducer,
    selectedPostIds: selectedPostIds,
    form: formReducer
});

export default rootReducer;