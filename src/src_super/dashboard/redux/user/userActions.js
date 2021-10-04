import { actionTypes } from "./";

export const user = (value) => ({
  type: actionTypes.USER,
  payload: value,
});

export const EVENTS = (value) => ({
  type: actionTypes.EVENTS,
  payload: value,
});
export const MANAGE_EVENT = (value) => ({
  type: actionTypes.MANAGE_EVENT,
  payload: value,
});
export const ATTENDEES = (value) => ({
  type: actionTypes.ATTENDEES,
  payload: value,
});
export const ORGANIZERS = (value) => ({
  type: actionTypes.ORGANIZERS,
  payload: value,
});
export const ORG_ATTENDEE_DATA = (value) => ({
  type: actionTypes.ORG_ATTENDEE_DATA,
  payload: value,
});
