import ApiService from '../../services/ApiService';

export const FETCH_MEETINGS = 'FETCH_MEETINGS';
export const CREATE_MEETING = 'CREATE_MEETING';
export const DELETE_MEETING = 'DELETE_MEETING';

export const fetchMeetings = () => async (dispatch) => {
  const response = await ApiService.get('/meetings');
  dispatch({ type: FETCH_MEETINGS, payload: response.data });
};

export const createMeeting = (meeting) => async (dispatch) => {
  const response = await ApiService.post('/meetings', meeting);
  dispatch({ type: CREATE_MEETING, payload: response.data });
};

export const deleteMeeting = (id) => async (dispatch) => {
  await ApiService.delete(`/meetings/${id}`);
  dispatch({ type: DELETE_MEETING, payload: id });
};
