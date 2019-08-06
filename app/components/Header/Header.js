import React from 'react';
import Navigation from 'components/Navigation';
import Search from 'components/Search';
import Login from 'components/Login';
import Locale from 'components/Locale';
// import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="header_container">
          <div className="header_container_nav">
            <Navigation />
          </div>
          <div className="header_container_search-login">
            <Search />
            <Login />
            <Locale />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
