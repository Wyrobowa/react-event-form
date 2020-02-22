export const GET_ATTENDIES_LIST_SUCCESSFUL = 'GET_ATTENDIES_LIST_SUCCESSFUL';
export const GET_ATTENDIES_LIST_UNSUCCESSFUL = 'GET_ATTENDIES_LIST_UNSUCCESSFUL';

export const getAttendiesListSuccessful = (payload) => ({
  type: GET_ATTENDIES_LIST_SUCCESSFUL,
  payload,
});

export const getAttendiesListUnsuccessful = () => ({
  type: GET_ATTENDIES_LIST_UNSUCCESSFUL,
});

export const requestAttendiesList = () => (dispatch) => {
  fetch('http://localhost:3001/list')
    .then((res) => res.json())
    .then((json) => dispatch(getAttendiesListSuccessful(json.data)))
    .catch(() => dispatch(getAttendiesListUnsuccessful()));
};
