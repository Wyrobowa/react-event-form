import * as attendeeFormActions from '../actions/attendeeFormActions';

const initialState = {
  attendeeForm: {
    firstName: '',
    lastName: '',
    email: '',
    eventDate: '',
  },
  status: 'initial',
  msg: '',
  formValidationErrors: [],
};

const attendeeForm = (state = initialState, action) => {
  switch (action.type) {
    case attendeeFormActions.EDIT_ATTENDEE_FORM:
      return {
        ...state,
        attendeeForm: {
          ...state.attendeeForm,
          [action.field]: action.value,
        },
      };
    case attendeeFormActions.CLEAR_ATTENDEE_FORM:
      return initialState;
    case attendeeFormActions.SEND_ATTENDEE_FORM_SUCCESSFUL:
      return {
        ...state,
        status: 'success',
        msg: 'Form has been saved!',
        formValidationErrors: [],
      };
    case attendeeFormActions.SEND_ATTENDEE_FORM_UNSUCCESSFUL:
      return {
        ...state,
        status: 'danger',
        msg: 'Something went wrong!',
        formValidationErrors: [],
      };
    case attendeeFormActions.RESET_STATUS:
      return {
        ...state,
        status: 'initial',
        formValidationErrors: [],
      };
    case attendeeFormActions.FORM_VALIDATION_ERRORS:
      return {
        ...state,
        status: 'danger',
        msg: 'Form validation errors!',
        formValidationErrors: action.errors,
      };
    default:
      return state;
  }
};

export const getAttendeeForm = (state) => state.attendee.attendeeForm;
export const getStatus = (state) => state.attendee.status;
export const getMessage = (state) => state.attendee.msg;
export const getFormValidationErrors = (state) => state.attendee.formValidationErrors;

export default attendeeForm;
