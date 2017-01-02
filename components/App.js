import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import getPosts from '../helpers/getPosts';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  function generatePostsUrls() {
    const postsObjects = getPosts();
    return (
        postsObjects.map(p => (
          <div key={p.slugifiedUrl}>
            <Link to={`/posts/${p.slugifiedCaterory}/${p.slugifiedUrl}`}>{p.title}</Link>
          </div>
        ))
      )
  }

  return (
    <div>
      <h1>Single Page Apps for GitHub Pages</h1>
        <nav>
          {generatePostsUrls()}
        </nav>
        <nav>
          {generateMapMenu()}
        </nav>
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
