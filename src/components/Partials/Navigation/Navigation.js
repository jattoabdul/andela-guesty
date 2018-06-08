import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    InputGroup,
    InputGroupAddon,
    Input
} from 'reactstrap';
import a_logo from '../../../assets/a-logo.png';
import './Navigation.scss';


const Navigation = props => {
    return (
        <div className="Navigation">
            <Navbar color="white" light expand="md">
                <NavbarBrand href="/">
                    <img src={a_logo} className="navigation-logo" alt="andela in-app logo"/>
                </NavbarBrand>
                <NavbarToggler onClick={props.toggle} />
                <Collapse isOpen={props.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <InputGroup>
                            <Input placeholder="search" />
                            <InputGroupAddon addonType="append">
                                <Button>@</Button>
                            </InputGroupAddon>
                        </InputGroup>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <span className="avatar"><img src="http://via.placeholder.com/30x30" className="rounded" alt="user avatar"/></span> Aminujatto Abdulqahhar
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                Guest History
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Log Out
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;