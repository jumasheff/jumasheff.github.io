import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import InlineSVG from './InlineSVG';

import hamburger from '../assets/images/hamburger.svg';
import closeMenuBtn from '../assets/images/close-menu.svg';


export default class Header extends Component {

  static propTypes = {
    generateCategoriesUrls: PropTypes.func
  }

  state = {
    isShowMobileMenu: false
  };

  openMobileMenu = () => this.setState({ isShowMobileMenu: true });

  closeMobileMenu = () => this.setState({ isShowMobileMenu: false });

  mobileHamburger() {
    return (
        <div className="mobile-menu-icon" onClick={this.openMobileMenu}>
          <InlineSVG src={hamburger} />
        </div>
    )
  }

  mobileMenu() {
    const { generateCategoriesUrls } = this.props;
    return (
        <div id="mobile-menu">
          <div className="mobile-menu-icon" onClick={this.closeMobileMenu}>
            <InlineSVG src={closeMenuBtn} />
          </div>
          {generateCategoriesUrls()}
        </div>
    )
  }

  render() {
    const { isShowMobileMenu } = this.state;
    return (
        <header>
          <div className="hamburgerContainer">
            {!isShowMobileMenu && this.mobileHamburger()}
          </div>
          {isShowMobileMenu &&
          <nav id="mobile-menu-container">
            {this.mobileMenu()}
          </nav>}
          <h1 className="go-home">
            <Link to="/">Чар жайыт блог</Link>
          </h1>
        </header>
    )
  }
}