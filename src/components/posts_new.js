import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPosts } from '../actions';
import './posts_new.css'

class PostsNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>

            </div>
        );
    }

    onSubmit = (values) => {
        this.props.createPosts(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label="Title For Post"
                    name="title"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    type="text"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
};

const validate = (values) => {
    let errors = {};

    // validate inputs from values object
    if (!values.title) {
        errors.title = 'Enter a title for the post!';
    }

    if (!values.categories) {
        errors.categories = 'Enter a category or categories for the post!';
    }

    if (!values.content) {
        errors.content = 'Enter content for the post!';
    }

    // if errors is empty form is valid
    // if errors !empty form is invalid
    return errors;
};

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null, { createPosts })(PostsNew));