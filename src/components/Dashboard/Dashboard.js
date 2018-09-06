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
    handleUpdateGuestTimeOut,
    setSelectedLocation
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
            filterText: '',
            currentLocation: 'lagos',
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

    handleOnSelectCity = (event) => {
        this.setState({ currentLocation: event.target.value });
        this.props.setSelectedLocation(event.target.value);
    }

    addGuestAction = (event) => {
        let { hostEmail, guestName, groupSize, selectPurpose, timeIn, timeOut, tagNo } = this.state;
        this.props.createGuest({ hostEmail, guestName, groupSize, selectPurpose, timeIn, timeOut, tagNo });
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

    handleOnChangeFilterText = (event) => {
        this.setState({
            filterText: event.target.value
        });
    }

    handleRefresh = () => {
        this.props.fetchGuest();
    }

    componentDidMount() {
        this.props.fetchGuest();
        this.props.setSelectedLocation();
        this.interval = setInterval(this.handleRefresh, 600000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { guestReducer: { allGuests, isFetchingGuest, meta } } = this.props;
        const { currentPage, guestPerPage, selectPurpose, currentLocation, filterText } = this.state;
        const indexOfLastGuest = currentPage * guestPerPage;
        const indexOfFirstGuest = indexOfLastGuest - guestPerPage;
        const allFilteredGuests = allGuests.filter(eachGuest => eachGuest.location === currentLocation && (eachGuest.guest_name.toLowerCase().indexOf(filterText) !== -1 || eachGuest.host_name.toLowerCase().indexOf(filterText) !== -1))
        const currentGuests = allFilteredGuests.slice(indexOfFirstGuest, indexOfLastGuest);
        let totalPages = Math.ceil((allFilteredGuests.length)/(guestPerPage));

        const displayCityName = (location) => {
            let currentCity;
            switch (location) {
                case 'lagos':
                    currentCity = 'Lagos'
                    break;
                case 'new-york':
                    currentCity = 'New York'
                    break;
                case 'nairobi':
                    currentCity = 'Nairobi'
                    break;
                case 'kampala':
                    currentCity = 'Kampala'
                    break;
                case 'kigali':
                    currentCity = 'Kigali'
                    break;
                case 'san-francisco':
                    currentCity = 'San Francisco'
                    break;
                default:
                    currentCity = 'Lagos'
                    break;
            }

            return currentCity;
        }

        const renderGuests = currentGuests.map((guest, index) => {
            return (<tr id={guest.id} key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{guest.guest_name}</td>
                    <td>{guest.host_name}</td>
                    <td>{guest.group_size}</td>
                    <td>{guest.purpose.charAt(0).toUpperCase() + guest.purpose.slice(1)}</td>
                    <td>{guest.time_in.format_24}</td>
                    <td>{guest.time_out.format_24}</td>
                    <td>
                    {guest.tag_no}
                    <sub className="tag-status">Status: {guest.submit_tag ? 'Returned' : 'Not Returned'}</sub>
                    </td>
                    <td>{displayCityName(guest.location)}</td>
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
                                {isFetchingGuest ? <div className="loader absolute"></div> : ''}
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
                                <Input placeholder="search" name="search" id="search" onChange={this.handleOnChangeFilterText} />
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

                            <InputGroup className="location-filter">
                                <Label for="current-location">Filter by Location:</Label>
                                <Input type="select" name="select" id="current-location" value={currentLocation} onChange={this.handleOnSelectCity}>
                                <option id="lagos" value='lagos'>Lagos</option>
                                <option id="new-york" value="new-york">New York</option>
                                <option id="san-francisco" value="san-francisco">San Francisco</option>
                                <option id="nairobi" value="nairobi" >Nairobi</option>
                                <option  id="kampala" value="kampala" >Kampala</option>
                                <option id="kigali" value="kigali">Kigali</option>
                                </Input>
                            </InputGroup>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Guest Name</th>
                                    <th scope="col">Host Name</th>
                                    <th scope="col">Group No.</th>
                                    <th scope="col">Purpose</th>
                                    <th scope="col">Time In</th>
                                    <th scope="col">Time Out</th>
                                    <th scope="col">Tag</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(parseInt(currentGuests.length, 10) === 0 ? <tr><td align="center" colSpan="10">No Guest Records</td></tr> : renderGuests)}
                            </tbody>
                        </table>
                        {(
                            parseInt(currentGuests.length, 10) === 0 ?
                            '' :
                            <Pagination
                                handlePageClick={this.handlePageClick}
                                pageCount={parseInt(totalPages, 10)}
                            />
                        )}
                    </div>
                    <ModalContainer isModalOpen={this.state.isModalOpen} toggle={this.toggle} actionName={this.state.actionName} addGuestAction={this.addGuestAction} location={currentLocation} handleOnSelectCity={this.handleOnSelectCity} addTagAction={this.addTagNoAction} updateTimeOut={this.updateTimeOutAction} guest={this.state.singleGuest} onChange={this.handleOnChange} onCheckBox={this.handleOnCheckBox} selectPurpose={selectPurpose}/>
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
    handleUpdateGuestTimeOut,
    setSelectedLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
