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
          <Link className="router-link" to="/forum">
            Forum
          </Link>
          <Link className="router-link" to="/chat">
            Chat
          </Link>
          <Link className="router-link" to="/map">
            Map
          </Link>
          <Link className="router-link" to="/trash utilization">
            Trash Utilization
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;