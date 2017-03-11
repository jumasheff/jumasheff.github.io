import React, { PropTypes, Component } from 'react';
import getPosts from '../helpers/getPosts'
import PostText from './PostText'
import postsDates from '../data/posts_dates.json';

export default class Posts extends Component {
  static propTypes = {
    short: PropTypes.bool.isRequired
  }

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
          short={this.props.short}
          postDate={postDate}
          formattedDate={this.formatDate(postDate)}
          slugifiedCategory={p.slugifiedCategory}
          category={p.category}
          text={text}
          url={p.slugifiedUrl}
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
