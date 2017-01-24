import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { map, path, uniq } from 'ramda';
import {Grid, Col, Row} from 'react-flexbox-grid/lib';

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

  function mobileMenu() {
    return (
        <div id="mobile-menu">
          {generateCategoriesUrls()}
        </div>
    )
  }

  return (
    <Grid>
      <Row>
        <Col xs={0} sm={0} md={4} lg={2}>
          <nav className="floating-menu">
            <h2>Категориялар</h2>
            {generateCategoriesUrls()}
          </nav>
        </Col>
        <Col xs={12} sm={12} md={8} lg={10}>
          <header>
            <nav id="mobile-menu-container">
              {mobileMenu()}
            </nav>
            <h1 className="go-home">
              <Link to="/">Чар жайыт блог</Link>
            </h1>
          </header>
          <nav>
            {generateMapMenu()}
          </nav>
          {children}
        </Col>
      </Row>
    </Grid>
  );
}

App.propTypes = propTypes;

export default App;
