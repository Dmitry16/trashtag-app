import React from 'react';
import Navigation from 'components/Navigation';
import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <Navigation />
      </div>
    );
  }
}

export default Header;
