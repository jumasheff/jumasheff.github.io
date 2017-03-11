import React, { PropTypes, Component } from 'react';
import getPosts from '../helpers/getPosts'
import PostText from './PostText'
import postsDates from '../data/posts_dates.json';

export default class Posts extends Component {

  formatDate = (d) => {
    const dateObject = new Date(d);
    return dateObject.getFullYear() + '.' + (dateObject.getMonth() + 1) + '.' + dateObject.getDate();
  }

  renderPosts = () => (
    getPosts().map((p, ind) => {
      const postDate = postsDates[p.filename]
      const text = require(`../posts/${p.category}/${p.filename}`);
      return (
        <PostText
          key={'post'+ind}
          postDate={postDate}
          formattedDate={this.formatDate(postDate)}
          slugifiedCategory={p.slugifiedCategory}
          category={p.category}
          text={text}
        />
      )
    })
  )

  render() {
    return (
      <div>{this.renderPosts()}</div>
    )
  }
}
