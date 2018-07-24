import React, { Component } from 'react';
import './Dashboard.scss';
import { Navigation } from '../Partials/Navigation';
import { ModalContainer } from '../Partials/ModalContainer';
import { FormContainer } from '../Partials/FormContainer';
import { Footer } from '../Partials/Footer';
import { Pagination } from '../Partials/Pagination';
import {
    InputGroup,
    Input,
    Label
} from 'reactstrap';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavDropdownOpen: false,
            isModalOpen: false,
            isAdd: true            
        };
    }

    toggleHamburgerNav = () => {
        this.setState({
            isNavDropdownOpen: !this.state.isNavDropdownOpen
        });
    }

    toggle = (action) => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            isAdd: action
          });
    }

    addAction = () => {
        console.log('adding');
    }

    editAction = () => {
        console.log('editing');
    }


    render() {
        return [
            <div className="Dashboard">
                <div className="navigation-container">
                    <Navigation
                        isOpen={this.state.isNavDropdownOpen}
                        toggle={this.toggleHamburgerNav}
                    />
                </div>
                <div className="guest-list-container">
                    <div className="guest-list-top-section">
                        <div className="guest-list-table-title">
                            <span className="table-title-text">Today's Guests</span>
                            <div className="line">
                                <span className="long-line"></span>
                                <span className="short-line"></span>
                            </div>
                        </div>
                        <div className="add-guest-container">
                            <div className="refresh-guest-btn">
                                <span>Refresh</span>
                            </div>
                            <div className="add-guest-btn"  onClick={this.toggle}>
                                <span>Add Guest</span>
                            </div>
                        </div>
                    </div>
                    <div className="guest-list-table-section">
                        <div className="table-filters">
                            <InputGroup className="search-filter">
                                <Label for="search">Filter by Name:</Label>
                                <Input placeholder="search" name="search" id="search" />
                            </InputGroup>
                            <InputGroup className="no-of-record-filter">
                                <Label for="no_of_record">No. of Records:</Label>
                                <Input type="select" name="select" id="no_of_record">
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                                <option>All</option>
                                </Input>
                            </InputGroup>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Guest Name</th>
                                    <th scope="col">Host Name</th>
                                    <th scope="col">Time In</th>
                                    <th scope="col">Time Out</th>
                                    <th scope="col">Tag No.</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Grace Ajuya</td>
                                    <td>Joseph Cobhams</td>
                                    <td>12-01-2018 13:30</td>
                                    <td>12-01-2018 15:30</td>
                                    <td>AND20190</td>
                                    <td>12-01-2018</td>
                                    <td>
                                        <span className="edit-icon" onClick={() => this.toggle(false)}></span>
                                        <span className="remove-icon"></span>    
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Grace Ajuya</td>
                                    <td>Joseph Cobhams</td>
                                    <td>12-01-2018 13:30</td>
                                    <td>12-01-2018 15:30</td>
                                    <td>AND20190</td>
                                    <td>12-01-2018</td>
                                    <td>
                                        <span className="edit-icon"></span>
                                        <span className="remove-icon"></span>    
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Grace Ajuya</td>
                                    <td>Joseph Cobhams</td>
                                    <td>12-01-2018 13:30</td>
                                    <td>12-01-2018 15:30</td>
                                    <td>AND20190</td>
                                    <td>12-01-2018</td>
                                    <td>
                                        <span className="edit-icon"></span>
                                        <span className="remove-icon"></span>    
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Pagination
                            pageCount={parseInt(10, 10)}
                            handlePageClick={this.handlePageClick}
                        />
                    </div>
                    <ModalContainer isModalOpen={this.state.isModalOpen} toggle={this.toggle} isAdd={this.state.isAdd} addAction={this.addAction} editAction={this.editAction}>
                        <div className="action-form-container">
                            {this.state.isAdd ? <FormContainer hostNameId={"addHostName"} guestNameId={"addGuestName"} /> : <FormContainer hostNameId={"editHostName"} guestNameId={"editGuestName"} />}
                        </div>
                    </ModalContainer>
                </div>
            </div>,
            <Footer />
        ];
    }
}

export default Dashboard;
