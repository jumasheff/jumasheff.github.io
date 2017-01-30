import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { find, propEq } from 'ramda';
import Markdown from 'react-mark';
import getPosts from '../helpers/getPosts';

import postsDates from '../data/posts_dates.json';

export default class Post extends Component {

  render() {
      const posts = getPosts();
      const { category, slug } = this.props.params;
      const postObj = find(propEq('slugifiedUrl', slug))(posts);
      const text = require(`../posts/${postObj.category}/${postObj.filename}`);
      const postDate = postsDates[postObj.filename];
      const dateObject = new Date(postDate);
      const formattedDate = dateObject.getFullYear() + '.' + (dateObject.getMonth() + 1) + '.' + dateObject.getDate();
      return (
        <div className="post-container">
          <div className="post-date-and-category">
            <time dateTime={postDate}>{formattedDate}</time> /
            <Link to={`/categories/${postObj.slugifiedCategory}/`}> {postObj.category}</Link>
          </div>
          <Markdown text={text} />
        </div>
      )
  }
}
