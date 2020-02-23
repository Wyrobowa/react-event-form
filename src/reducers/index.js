import { combineReducers } from 'redux';

import attendee from './attendeeFormReducer';
import attendies from './attendiesListReducer';

const AppReducers = combineReducers({
  attendee,
  attendies,
});

export default AppReducers;
