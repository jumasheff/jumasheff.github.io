import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { map, path, uniq } from 'ramda';
import getPosts from '../helpers/getPosts';
import urlSlug from '../helpers/urlSlug';

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

  function generateCategoriesUrls() {
    const posts = getPosts();
    const val =(o) => path(['category'], o);
    const categories = uniq(map(val, posts));
    return (
        categories.map(c => (
            <div key={urlSlug(c)}>
              <Link to={`/categories/${urlSlug(c)}/`}>{c}</Link>
            </div>
        ))
      )
  }

  return (
    <div>
      <div className="main">
        <h1>Single Page Apps for GitHub Pages</h1>
        <nav>
          {generateMapMenu()}
        </nav>
        {children}
      </div>
      <nav className="floating-menu">
        <h2>Категориялар</h2>
        {generateCategoriesUrls()}
      </nav>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
