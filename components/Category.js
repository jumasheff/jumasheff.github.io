import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { filter, propEq } from 'ramda';
import getPosts from '../helpers/getPosts';

export default class Category extends Component {

  renderPostLink(p) {
    return (
        <div key={p.slugifiedUrl}>
          <Link to={`/posts/${p.slugifiedCategory}/${p.slugifiedUrl}`}>{p.title}</Link>
        </div>
    )
  }

  render() {
    const posts = getPosts();
    const { category } = this.props.params;
    const postsObjectsList = filter(propEq('slugifiedCategory', category))(posts);
    if(postsObjectsList.length > 0) {
      return (
          <div>
            <h2>{postsObjectsList[0].category}</h2>
            { postsObjectsList.map(p => this.renderPostLink(p)) }
          </div>
      )
    }
    return (
        <h2>Мындай категория жок</h2>
    )
  }
}
