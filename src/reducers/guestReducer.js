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

const initialState = {
  allGuests: [],
  meta: {},
  currentGuest: {},
  isFetchingGuest: false,
  errorFetchingGuest: {},
  isAddingGuest: false,
  errorAddingGuest: {},
  isAddingGuestTag: false,
  errorAddingGuestTag: {},
  isUpdatingGuestTimeout: false,
  errorUpdatingGuestTimeout: {}
};

const guestReducer = (state = initialState, action) => {
  const { type, payload } = action;
    switch (type) {
      case GET_GUEST:
        return {
          ...state,
          isFetchingGuest: true
        }
      case GET_GUEST_SUCCESS:
        return {
          ...state,
          allGuests: payload.guests,
          meta: payload.meta,
          isFetchingGuest: false
        }
      case GET_GUEST_FAIL:
        return {
          ...state,
          errorFetchingGuest: payload,
          isFetchingGuest: false
        }
      case ADD_GUEST:
        return {
          ...state,
          isAddingGuest: true
        }
      case ADD_GUEST_SUCCESS:
        return {
          ...state,
          allGuests: [payload, ...state.allGuests],
          isAddingGuest: false
        }
      case ADD_GUEST_FAIL:
        return {
          ...state,
          errorAddingGuest: payload,
          isAddingGuest: false
        }
      case ADD_GUEST_TAG:
        return {
          ...state,
          isAddingGuestTag: true
        }
      case ADD_GUEST_TAG_SUCCESS:
        let allGuests = state.allGuests
        let guestIndex = allGuests.findIndex(guest => guest.id === payload.id);
        if (allGuests[guestIndex]) { 
          allGuests[guestIndex] = payload 
        } else { 
          allGuests = [...allGuests, payload]
        };
        return {
          ...state,
          allGuests: [...allGuests],
          isAddingGuestTag: false
        }
      case ADD_GUEST_TAG_FAIL:
        return {
          ...state,
          errorAddingGuest: payload,
          isAddingGuestTag: false
        }
      case UPDATE_GUEST_TIMEOUT:
        return {
          ...state,
          isUpdatingGuestTimeout: true
        }
      case UPDATE_GUEST_TIMEOUT_SUCCESS:
        let allGuest = state.allGuests
        let indexOfGuest = allGuest.findIndex(guest => guest.id === payload.id);
        if (allGuest[indexOfGuest]) { 
          allGuest[indexOfGuest] = payload 
        } else { 
          allGuest = [...allGuest, payload]
        };
        return {
          ...state,
          allGuests: [...allGuest],
          isUpdatingGuestTimeout: false
        }
      case UPDATE_GUEST_TIMEOUT_FAIL:
        return {
          ...state,
          errorUpdatingGuestTimeout: payload,
          isUpdatingGuestTimeout: false
        }
     default:
      return state
    }
   }


export default guestReducer;