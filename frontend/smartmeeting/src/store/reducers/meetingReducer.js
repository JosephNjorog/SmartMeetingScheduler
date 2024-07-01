import { FETCH_MEETINGS, CREATE_MEETING, DELETE_MEETING } from '../actions/meetingActions';

const initialState = {
  meetings: [],
};

const meetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEETINGS:
      return { ...state, meetings: action.payload };
    case CREATE_MEETING:
      return { ...state, meetings: [...state.meetings, action.payload] };
    case DELETE_MEETING:
      return { ...state, meetings: state.meetings.filter(meeting => meeting.id !== action.payload) };
    default:
      return state;
  }
};

export default meetingReducer;
