import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    fetchPosts,
    selectPost,
    deselectPost
} from '../actions';
import SelectedPostsList from './selected_posts_list';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    handlePostSelect({ id }, event) {
        const { selectPost, deselectPost } = this.props;
        event.target.checked ? selectPost(id) : deselectPost(id);
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <input
                        checked={_.includes(this.props.selectedPostIds, post.id)}
                        type="checkbox"
                        onChange={this.handlePostSelect.bind(this, post)} />
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <SelectedPostsList />
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { posts: state.posts, selectedPostIds: state.selectedPostIds }
};


export default connect(mapStateToProps, { fetchPosts, selectPost, deselectPost })(PostsIndex);