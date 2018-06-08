import React, { Component } from 'react';
import './Dashboard.scss';
import { Navigation } from '../Partials/Navigation';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavDropdownOpen: false
        };
    }

    toggleHamburgerNav = () => {
        this.setState({
            isNavDropdownOpen: !this.state.isNavDropdownOpen
        });
    }

    render() {
        return (
            <div className="Dashboard">
                <div className="navigation-container">
                    <Navigation
                        isOpen={this.state.isNavDropdownOpen}
                        toggle={this.toggleHamburgerNav}
                    />
                </div>
                <div className="guest-list-container">
                    <h1>Dashboard Screen GuestList(Table) Component goes here</h1>
                </div>
                <div className="footer-container">
                    <p>Footer Component goes here</p>
                </div>
            </div>
        );
    }
}

export default Dashboard;
