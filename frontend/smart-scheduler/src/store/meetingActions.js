import ApiService from '../services/ApiService';

export const fetchMeetings = () => async (dispatch) => {
  const meetings = await ApiService.getMeetings();
  dispatch({ type: 'FETCH_MEETINGS', payload: meetings });
};

export const createMeeting = (meeting) => async (dispatch) => {
  const newMeeting = await ApiService.createMeeting(meeting);
  dispatch({ type: 'CREATE_MEETING', payload: newMeeting });
};

export const updateMeeting = (id, meeting) => async (dispatch) => {
  const updatedMeeting = await ApiService.updateMeeting(id, meeting);
  dispatch({ type: 'UPDATE_MEETING', payload: updatedMeeting });
};

export const deleteMeeting = (id) => async (dispatch) => {
  await ApiService.deleteMeeting(id);
  dispatch({ type: 'DELETE_MEETING', payload: id });
};
