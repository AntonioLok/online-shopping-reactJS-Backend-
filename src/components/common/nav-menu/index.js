import React, { PureComponent } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants';

// eslint-disable-next-line react/prefer-stateless-function
class NavMenu extends PureComponent {
  render() {
    const {
      home, register, logIn,
    } = ROUTES;

    return (
      <div className="os--nav-menu">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={home}>Home</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem href={register}>Register</NavItem>
            <NavItem href={logIn}>Login</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;
