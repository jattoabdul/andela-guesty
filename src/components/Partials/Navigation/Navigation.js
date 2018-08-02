import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    // Collapse,
    // Nav,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem
} from 'reactstrap';
import './Navigation.scss';


const Navigation = props => {
    return (
        <div className="Navigation">
            <Navbar color="white" light expand="md">
                <NavbarBrand href="/">
                    <div className="navigation-logo"></div>
                </NavbarBrand>
                <NavbarToggler onClick={props.toggle} />
                {/**<Collapse isOpen={props.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <span className="avatar"><img src="http://via.placeholder.com/50x50" className="rounded" alt="user avatar"/></span> Aminujatto Abdulqahhar
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
    </Collapse>**/}
            </Navbar>
        </div>
    );
}

export default Navigation;