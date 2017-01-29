import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { map, path, uniq } from 'ramda';
import {Grid, Col, Row} from 'react-flexbox-grid/lib';

import Header from './Header';
import getPosts from '../helpers/getPosts';
import urlSlug from '../helpers/urlSlug';


export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    routes: PropTypes.array.isRequired,
  };

  generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      this.props.routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  generateCategoriesUrls() {
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

  render () {
    const { children } = this.props;
    return (
        <div>
          <Header generateCategoriesUrls={this.generateCategoriesUrls} />
          <Grid>
            <Row>
              <Col xs={0} sm={0} md={4} lg={2}>
                <nav className="floating-menu">
                  <h2>Категориялар</h2>
                  {this.generateCategoriesUrls()}
                </nav>
              </Col>
              <Col xs={12} sm={12} md={8} lg={10}>
                <nav>
                  {this.generateMapMenu()}
                </nav>
                {children}
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}
