import React, { Component } from 'react';
import { Navbar, Nav, MenuItem, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class CustomNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: ["Spanish", "English"]
        }
    }



    render() {
        return (
            <Navbar fixedTop >
                    <Navbar.Brand>
                <Link to="/">
                        Aselsa
                </Link>
                    </Navbar.Brand>
                <Nav pullRight onSelect={event => this.handleLanguageChange(event)}>
                    <NavDropdown title="Language" id="basic-nav-dropdown">
                        <MenuItem eventKey={this.state.language[0]}>{this.state.language[0]}</MenuItem>
                        <MenuItem eventKey={this.state.language[1]}>{this.state.language[1]}</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }

    handleLanguageChange(event) {
        this.props.onLanguageChange(event);
    }

}

export default CustomNavBar;