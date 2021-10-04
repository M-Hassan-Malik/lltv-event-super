import { actionTypes } from "./";

const initialState = {
  user: {
    _id: "",
    user_type: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
    dob: "",
    postal: "",
    contact: "",
    company: "",
    created_at: "",
    updated_at: "",
    month: "",
  },
  org_attendee: {
    _id: "",
    user_type: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
    dob: "",
    postal: "",
    contact: "",
    company: "",
    created_at: "",
    updated_at: "",
    month: "",
  },
  manageEvent: {
    organizer_id: "",
    title: "",
    hostingPlatform: "",
    category: "",
    eventType: "",
    webURL: "",
    description: "",
    moreinfo: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    venue: "",
    venue_address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    images: [],
    tickets_sold: "",
    month: 0,
    updated_at: new Date(),
    created_at: new Date(),
  },
  totalEvents: 0,
  totalOrganizers: 0,
  totalAttendees: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.EVENTS:
      return {
        ...state,
        totalEvents: action.payload,
      };
    case actionTypes.MANAGE_EVENT:
      return {
        ...state,
        manageEvent: action.payload,
      };
    case actionTypes.ORGANIZERS:
      return {
        ...state,
        totalOrganizers: action.payload,
      };
    case actionTypes.ATTENDEES:
      return {
        ...state,
        totalAttendees: action.payload,
      };
    case actionTypes.ORG_ATTENDEE_DATA:
      return {
        ...state,
        org_attendee: action.payload,
      };
    default:
      return state;
  }
};
