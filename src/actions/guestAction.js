import axios from 'axios';
import {
    GET_GUEST,
    GET_GUEST_SUCCESS,
    GET_GUEST_FAIL,
    ADD_GUEST,
    ADD_GUEST_SUCCESS,
    ADD_GUEST_FAIL,
    ADD_GUEST_TAG,
    ADD_GUEST_TAG_SUCCESS,
    ADD_GUEST_TAG_FAIL,
    UPDATE_GUEST_TIMEOUT,
    UPDATE_GUEST_TIMEOUT_SUCCESS,
    UPDATE_GUEST_TIMEOUT_FAIL } from '../constants';


export const getSelectedLocation = () => {
    return localStorage.getItem('location') || 'lagos';
}

export const setSelectedLocation = (location = 'lagos') => (dispatch) => {
    localStorage.setItem('location', location);
}

export function getGuest() {
    return {
      type: GET_GUEST
    };
}

export function getGuestSuccess(allGuests) {
    return {
        type: GET_GUEST_SUCCESS,
        payload: allGuests
    };
}

export function getGuestFail(errorFetchingGuest) {
    return {
        type: GET_GUEST_FAIL,
        payload: errorFetchingGuest
    };
}

export const fetchGuest = () => async(dispatch) => {
    dispatch(getGuest());
    try {
        const response = await axios.get('/guests');
        dispatch(getGuestSuccess(response.data.payload));
      } catch (error) {
        dispatch(getGuestFail(error));
      }
}

export function addGuest() {
    return {
      type: ADD_GUEST
    };
  }

export function addGuestSuccess(guest) {
    return {
        type: ADD_GUEST_SUCCESS,
        payload: guest
    };
}

export function addGuestFail(errorAddingGuest) {
    return {
        type: ADD_GUEST_FAIL,
        payload: errorAddingGuest
    };
}


export const createGuest = (guestData) => async(dispatch) => {
    dispatch(addGuest());
    const data = {
        guest_name: guestData.guestName,
        group_size: guestData.groupSize,
        host_email: guestData.hostEmail,
        purpose: guestData.selectPurpose,
        time_in: guestData.timeIn,
        time_out: guestData.timeOut,
        location: getSelectedLocation(),
        tag_no: guestData.tagNo
    };

    try {
        const response = await axios.post('/guest', data);
        dispatch(addGuestSuccess(response.data.payload));
    } catch (error) {
        dispatch(getGuestFail(error));
      }
}

export function addGuestTag() {
    return {
      type: ADD_GUEST_TAG
    };
  }

export function addGuestTagSuccess(guest) {
    return {
        type: ADD_GUEST_TAG_SUCCESS,
        payload: guest
    };
}

export function addGuestTagFail(errorAddingGuest) {
    return {
        type: ADD_GUEST_TAG_FAIL,
        payload: errorAddingGuest
    };
}

export const createGuestTag = (guestId, tagNo, beep=false) => async(dispatch) => {
    dispatch(addGuestTag());
    const data = `tag_no=${tagNo}&beep=${beep}`;

    try {
        const response = await axios.patch(`/guest/${guestId}/update/tag-no`, data);
        dispatch(addGuestTagSuccess(response.data.payload));
    } catch (error) {
        dispatch(addGuestTagFail(error));
    }
}

export function updateGuestTimeOut() {
    return {
      type: UPDATE_GUEST_TIMEOUT
    };
  }

export function updateGuestTimeOutSuccess(guest) {
    return {
        type: UPDATE_GUEST_TIMEOUT_SUCCESS,
        payload: guest
    };
}

export function updateGuestTimeOutFail(errorAddingGuest) {
    return {
        type: UPDATE_GUEST_TIMEOUT_FAIL,
        payload: errorAddingGuest
    };
}


export const handleUpdateGuestTimeOut = (guestId, timeOut, submitted=false) => async(dispatch) => {
    dispatch(updateGuestTimeOut());
    const data = `time_out=${timeOut}&submit_tag=${submitted}`;

    try {
        const response = await axios.patch(`/guest/${guestId}/update/time-out`, data);
        dispatch(updateGuestTimeOutSuccess(response.data.payload));
    } catch (error) {
        dispatch(updateGuestTimeOutFail(error));
      }
}