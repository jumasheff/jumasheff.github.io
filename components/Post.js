import React, { PropTypes, Component } from 'react';
import { find, propEq } from 'ramda';
import PostText from './PostText';
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
          <PostText
            postDate={postDate}
            formattedDate={formattedDate}
            slugifiedCategory={postObj.slugifiedCategory}
            category={postObj.category}
            text={text}
          />
      )
  }
}
