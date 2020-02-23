import * as actions from '../attendiesListActions';

describe('attendiesListActions', () => {
  it('should create an action to getAttendiesListSuccessful', () => {
    const expectedAction = {
      type: actions.GET_ATTENDIES_LIST_SUCCESSFUL,
    };
    expect(actions.getAttendiesListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getAttendiesListUnsuccessful', () => {
    const expectedAction = {
      type: actions.GET_ATTENDIES_LIST_UNSUCCESSFUL,
    };
    expect(actions.getAttendiesListUnsuccessful()).toEqual(expectedAction);
  });
});
