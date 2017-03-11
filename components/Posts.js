import React, { PropTypes, Component } from 'react'
import R from 'ramda'
import getPosts from '../helpers/getPosts'
import PostText from './PostText'
import postsDates from '../data/posts_dates.json'

export default class Posts extends Component {
  static propTypes = {
    short: PropTypes.bool.isRequired
  }

  formatDate = (d) => {
    const dateObject = new Date(d);
    return dateObject.getFullYear() + '.' + (dateObject.getMonth() + 1) + '.' + dateObject.getDate();
  }

  postsWithDate = () => {
    const posts = getPosts()
    let newPosts = []
    posts.forEach(p => {
      let post = Object.assign({}, p, { postDate: postsDates[p.filename] })
      newPosts.push(post)
    })
    return newPosts
  }

  renderPosts = (posts) => (
    posts.map((p, ind) => {
      const text = require(`../posts/${p.category}/${p.filename}`);
      return (
        <PostText
          key={'post'+ind}
          short={this.props.short}
          postDate={p.postDate}
          formattedDate={this.formatDate(p.postDate)}
          slugifiedCategory={p.slugifiedCategory}
          category={p.category}
          text={text}
          url={p.slugifiedUrl}
        />
      )
    })
  )

  render() {
    const posts = this.postsWithDate()
    const byDate = R.descend(R.prop('postDate'))
    const sortedPosts = R.sort(byDate, posts)
    return (
      <div>{this.renderPosts(sortedPosts)}</div>
    )
  }
}
