import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBriefcase, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu width={'130px'} right>
        <Link to="/" className="menu-item">
          <FontAwesomeIcon icon={faHouse} className='faAwesome'/>
        </Link>
        <Link to="/portfolio" className="menu-item">
          <FontAwesomeIcon icon={faBriefcase} className='faAwesome'/>
        </Link>
        <Link to="/profile" className="menu-item">
          <FontAwesomeIcon icon={faUser} className='faAwesome'/>
        </Link>
        <a id="contact" className="menu-item" href="mailto:abanks7296@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className='faAwesome'/>
        </a>
      </Menu>
    );
  }
}

export default Sidebar;