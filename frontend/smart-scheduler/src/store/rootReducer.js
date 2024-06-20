import { combineReducers } from 'redux';
import meetingReducer from './meetingReducer';

const rootReducer = combineReducers({
  meetings: meetingReducer,
});

export default rootReducer;
