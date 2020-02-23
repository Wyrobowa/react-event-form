import reducer from '../attendiesListReducer';
import * as actions from '../../actions/attendiesListActions';

const initialState = {
  attendiesList: [],
  status: 'initial',
  msg: '',
};

describe('attendiesListReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_ATTENDIES_LIST_SUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
      attendiesList: [
        {
          firstName: 'Test First Name',
          lastName: 'Test Last Name',
          email: 'test@email.com',
          eventDate: '2020-01-01',
          slug: 'testemailcom',
        },
      ],
    };

    expect(reducer(initialState, {
      type: actions.GET_ATTENDIES_LIST_SUCCESSFUL,
      payload: [
        {
          firstName: 'Test First Name',
          lastName: 'Test Last Name',
          email: 'test@email.com',
          eventDate: '2020-01-01',
          slug: 'testemailcom',
        },
      ],
    })).toEqual(changedState);
  });

  it('should handle GET_ATTENDIES_LIST_UNSUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
      msg: 'Something went wrong! List of attendies coudn\'t be loaded!',
      status: 'danger',
    };

    expect(reducer(initialState, {
      type: actions.GET_ATTENDIES_LIST_UNSUCCESSFUL,
    })).toEqual(changedState);
  });
});
