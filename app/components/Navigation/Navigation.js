import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="navigation">
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/blog">
            Blog
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;