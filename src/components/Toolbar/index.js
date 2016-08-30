import React from 'react';
import Dropdown from '../Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownMenu from '../Dropdown/DropdownMenu'

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="container">
        <nav className="navbar-default navbar">
          <a href="" className="navbar-brand">Starter kit</a>
          <ul className="nav navbar-nav">
            <li><a className="nav-link active" href="">Features</a></li>
            <li><a className="nav-link" href="">Github</a></li>
            <Dropdown component="li">
              <DropdownButton
                component="a"
                className="nav-link dropdown-button"
                href=""
              >
                More <i className="fa fa-angle-down" />
              </DropdownButton>
              <DropdownMenu>
                <a href="" className="dropdown-link">Issues</a>
              </DropdownMenu>
            </Dropdown>
          </ul>
          <ul className="nav navbar-nav right">
            <li><a className="nav-link" href="">Documentation</a></li>
            <li><a className="nav-link" href="">Support</a></li>
          </ul>
        </nav>
        </div>
    </div>
  )
};

Toolbar.displayName = 'Toolbar';

export default Toolbar;
