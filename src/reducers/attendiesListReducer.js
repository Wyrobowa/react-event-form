import * as actions from '../actions/attendiesListActions';

const initialState = {
  attendiesList: [{
    firstName: '',
    lastName: '',
    email: '',
    eventDate: '',
    slug: '',
  }],
  status: 'initial',
  msg: '',
};

const attendiesList = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ATTENDIES_LIST_SUCCESSFUL:
      return {
        ...state,
        attendiesList: action.payload,
      };
    case actions.GET_ATTENDIES_LIST_UNSUCCESSFUL:
      return {
        ...state,
        status: 'danger',
        msg: 'Something went wrong! List of attendies coudn\'t be loaded!',
      };
    default:
      return state;
  }
};

export const getAttendiesList = (state) => state.attendies.attendiesList;
export const getStatus = (state) => state.attendies.status;
export const getMessage = (state) => state.attendies.msg;

export default attendiesList;
