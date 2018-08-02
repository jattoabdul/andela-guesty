import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import { Navigation } from '../Partials/Navigation';
import { ModalContainer } from '../Partials/ModalContainer';
import { Footer } from '../Partials/Footer';
import { Pagination } from '../Partials/Pagination';
import {
    InputGroup,
    Input,
    Label
} from 'reactstrap';
import {
    fetchGuest,
    createGuest,
    createGuestTag,
    handleUpdateGuestTimeOut
  } from '../../actions/guestAction';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavDropdownOpen: false,
            isModalOpen: false,
            actionName: '',
            guestPerPage: 10,
            currentPage: 1,
            selectPurpose: 'personal',
            singleGuest: {}
        };
    }

    toggleHamburgerNav = () => {
        this.setState({
            isNavDropdownOpen: !this.state.isNavDropdownOpen
        });
    }

    toggle = (action='', guest={}) => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            actionName: action,
            singleGuest: guest
          });
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleOnCheckBox = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    }

    addGuestAction = (event) => {
        let { hostEmail, guestName, selectPurpose, timeIn, tagNo } = this.state;
        this.props.createGuest({ hostEmail, guestName, selectPurpose, timeIn, tagNo });
        this.toggle('');
    }

    addTagNoAction = (guest) => {
        let { tag_no, beep } = this.state;
        this.props.createGuestTag(guest.id, tag_no, beep);
        this.setState({
            beep: !this.state.beep,
        });
        this.toggle('');
    }
    
    updateTimeOutAction = (guest) => {
        let { time_out, tag_submitted } = this.state;
        this.props.handleUpdateGuestTimeOut(guest.id, time_out, tag_submitted);
        this.setState({
            tag_submitted: !this.state.tag_submitted,
        });
        this.toggle('');
    }

    handlePageClick = (page) => {
        const selectedPage = Math.ceil(page.selected + 1);
        this.setState({
            currentPage: Number(selectedPage)
        });
    }

    handleOnChangeNoPerPage = (event) => {
        this.setState({
            guestPerPage: Number(event.target.value)
        });
    }

    handleRefresh = () => {
        this.props.fetchGuest();
    }

    componentDidMount() {
        this.props.fetchGuest();
    }

    render() {
        const { guestReducer: { allGuests, meta } } = this.props;
        const { currentPage, guestPerPage, selectPurpose } = this.state;
        const indexOfLastGuest = currentPage * guestPerPage;
        const indexOfFirstGuest = indexOfLastGuest - guestPerPage;
        const currentGuests = allGuests.slice(indexOfFirstGuest, indexOfLastGuest);
        let totalPages = Math.ceil((allGuests.length)/(guestPerPage));

        const renderGuests = currentGuests.map((guest, index) => {
            return (<tr id={guest.id} key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{guest.guest_name}</td>
                    <td>{guest.host_name}</td>
                    <td>{guest.purpose.charAt(0).toUpperCase() + guest.purpose.slice(1)}</td>
                    <td>{guest.time_in.format_24}</td>
                    <td>{guest.time_out.format_24}</td>
                    <td>{guest.tag_no}</td>
                    <td>
                        <span className="edit-icon add-tag-no" onClick={() => this.toggle('Add Tag No', guest)}></span>
                        <span className="remove-icon update-time-out" onClick={() => this.toggle('Update Time Out', guest)}></span>    
                    </td>
                </tr>);
          });
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
                            <div className="refresh-guest-btn" onClick={this.handleRefresh}>
                                <span>Refresh</span>
                            </div>
                            <div className="add-guest-btn"  onClick={() => this.toggle('Add Guest')}>
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
                                <Input type="select" name="select" id="no_of_record" value={this.state.guestPerPage} onChange={this.handleOnChangeNoPerPage}>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value={meta.total_rows || "1000"}>All</option>
                                </Input>
                            </InputGroup>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Guest Name</th>
                                    <th scope="col">Host Name</th>
                                    <th scope="col">Purpose</th>
                                    <th scope="col">Time In</th>
                                    <th scope="col">Time Out</th>
                                    <th scope="col">Tag No.</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderGuests}
                            </tbody>
                        </table>
                        <Pagination
                            handlePageClick={this.handlePageClick}
                            pageCount={parseInt(totalPages, 10)}
                        />
                    </div>
                    <ModalContainer isModalOpen={this.state.isModalOpen} toggle={this.toggle} actionName={this.state.actionName} addGuestAction={this.addGuestAction} addTagAction={this.addTagNoAction} updateTimeOut={this.updateTimeOutAction} guest={this.state.singleGuest} onChange={this.handleOnChange} onCheckBox={this.handleOnCheckBox} selectPurpose={selectPurpose}/>
                </div>
            </div>,
            <Footer />
        ];
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    fetchGuest,
    createGuest,
    createGuestTag,
    handleUpdateGuestTimeOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
