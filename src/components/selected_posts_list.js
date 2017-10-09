import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedPostsSelector from '../selectors/selected_posts';
import { deletePost } from '../actions';

class SelectedPostsList extends Component {


    onDeleteClick = async () => {
        await Promise.all(this.props.posts.map(({ id }) => this.props.deletePost(id)));
    }

    render() {
        if (this.props.posts.length === 0) {
            return null;
        }

        return (
            <div>
                <h3>Selected Posts</h3>
                <ul className="list-group">
                    {
                        this.props.posts.map(post => {
                            return <li className="list-group-item" key={post.id}>{post.title}</li>
                        })
                    }
                </ul>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                >Delete Selected Posts</button>
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        posts: SelectedPostsSelector(state)
    };
};

export default connect(mapStateToProps, { deletePost })(SelectedPostsList);