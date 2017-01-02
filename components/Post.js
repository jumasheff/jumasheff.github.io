import React, { PropTypes, Component } from 'react';
import { find, propEq } from 'ramda';
import Markdown from 'react-mark';
import getPosts from '../helpers/getPosts';

export default class Post extends Component {

    render() {
        const posts = getPosts();
        const { category, slug } = this.props.params;
        const postObj = find(propEq('slugifiedUrl', slug))(posts);
        const text = require(`../posts/${postObj.category}/${postObj.filename}`);
        return (
            <Markdown text={text} />
        )
    }
}
