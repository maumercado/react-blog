import _ from 'lodash';
import { createSelector } from 'reselect';

const postsSelector = state => state.posts
const selectedPostsSelector = state => state.selectedPostIds

const getPosts = (posts, selectedPostIds) => {
    const selectedPosts = _.filter(
        posts,
        post => _.includes(selectedPostIds, post.id)
    );

    return selectedPosts;
};

export default createSelector(
    postsSelector, // pick off a piece of state
    selectedPostsSelector, // pick off a piece of state
    getPosts // last argument is the function that has our select logic
);