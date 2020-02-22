export const SEND_ATTENDEE_FORM_SUCCESSFUL = 'SEND_ATTENDEE_FORM_SUCCESSFUL';
export const SEND_ATTENDEE_FORM_UNSUCCESSFUL = 'SEND_ATTENDEE_FORM_UNSUCCESSFUL';
export const EDIT_ATTENDEE_FORM = 'EDIT_ATTENDEE_FORM';
export const CLEAR_ATTENDEE_FORM = 'CLEAR_ATTENDEE_FORM';
export const RESET_STATUS = 'RESET_STATUS';
export const FORM_VALIDATION_ERRORS = 'FORM_VALIDATION_ERRORS';

export const sendAttendeeFormSuccessful = () => ({
  type: SEND_ATTENDEE_FORM_SUCCESSFUL,
});

export const sendAttendeeFormUnsuccessful = () => ({
  type: SEND_ATTENDEE_FORM_UNSUCCESSFUL,
});

export const clearAttendeeForm = () => ({
  type: CLEAR_ATTENDEE_FORM,
});

export const resetStatus = () => ({
  type: RESET_STATUS,
});

export const formValidationErrors = (errors) => ({
  type: FORM_VALIDATION_ERRORS,
  errors,
});

export const sendAttendeeForm = (schema, attendeeForm) => async (dispatch) => {
  try {
    await schema.validate(attendeeForm, { abortEarly: false });

    try {
      const response = await fetch('http://localhost:3001/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attendeeForm),
      });

      await response.json();

      dispatch(clearAttendeeForm());
      dispatch(sendAttendeeFormSuccessful());
    } catch (error) {
      dispatch(sendAttendeeFormUnsuccessful());
    }
  } catch (error) {
    const errors = error.inner.map((item) => (item.message));

    dispatch(formValidationErrors(errors));
  }
};

export const editAttendeeForm = (field, value) => ({
  type: EDIT_ATTENDEE_FORM,
  field,
  value,
});
