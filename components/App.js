import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import {Grid, Col, Row} from 'react-flexbox-grid/lib'

import Header from './Header'
import getCategories from '../helpers/getCategories'
import urlSlug from '../helpers/urlSlug'


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
    const categories = getCategories();
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
              <Col xs={0} sm={0} md={3} lg={2}>
                <nav className="floating-menu">
                  <h2>Категориялар</h2>
                  {this.generateCategoriesUrls()}
                </nav>
              </Col>
              <Col xsOffset={1} xs={11} smOffset={1} sm={11} mdOffset={0} md={9} lgOffset={0} lg={10}>
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
