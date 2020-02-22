import { GET_ATTENDIES_LIST_SUCCESSFUL } from '../actions/attendiesListActions';

const initialState = {
  attendiesList: [{
    firstName: '',
    lastName: '',
    email: '',
    eventDate: '',
    slug: '',
  }],
};

const attendiesList = (state = initialState, action) => {
  switch (action.type) {
    case GET_ATTENDIES_LIST_SUCCESSFUL:
      return {
        ...state,
        attendiesList: action.payload,
      };
    default:
      return state;
  }
};

export const getAttendiesList = (state) => state.attendies.attendiesList;

export default attendiesList;
