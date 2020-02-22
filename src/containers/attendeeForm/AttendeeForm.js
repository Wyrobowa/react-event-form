import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import * as yup from 'yup';

// Actions
import * as attendeeFormActions from '../../actions/attendeeFormActions';

// Components
import Alert from '../../components/alert/Alert';
import Button from '../../components/button/Button';
import InputFormField from '../../components/inputFormField/InputFormField';

// Reducers
import * as attendeeFormReducer from '../../reducers/attendeeFormReducer';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name field can\'t be empty!'),
  lastName: yup.string().required('Last Name field can\'t be empty!'),
  email: yup.string().email('Please enter a valid email!').required('Email field can\'t be empty!'),
  eventDate: yup.date().required('Event Date field can\'t be empty!'),
});

const AttendeeForm = ({
  status,
  msg,
  formValidationErrors,
  attendeeForm,
  editAttendeeFormAction,
  sendAttendeeFormAction,
}) => {
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    editAttendeeFormAction(name, value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    sendAttendeeFormAction(schema, attendeeForm);
  };

  return (
    <div className="container">
      {status !== 'initial' && (
        <Alert type={status} msg={msg}>
          {formValidationErrors.map((error) => (
            <li>{error}</li>
          ))}
        </Alert>
      )}
      <div className="container col-md-4 mt-3">
        <form>
          <InputFormField
            label="First Name"
            id="firstName"
            onChange={handleInputChange}
            value={attendeeForm.firstName}
          />
          <InputFormField
            label="Last Name"
            id="lastName"
            onChange={handleInputChange}
            value={attendeeForm.lastName}
          />
          <InputFormField
            label="Email"
            id="email"
            type="email"
            onChange={handleInputChange}
            value={attendeeForm.email}
          />
          <InputFormField
            label="Event Date"
            id="eventDate"
            type="date"
            onChange={handleInputChange}
            value={attendeeForm.eventDate}
            min={dayjs().format('YYYY-MM-DD')}
          />
          <Button type="submit" text="Add" onClick={handleSubmit} className="btn btn-primary btn-block" />
        </form>
      </div>
    </div>
  );
};

AttendeeForm.propTypes = {
  status: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  formValidationErrors: PropTypes.array.isRequired,
  attendeeForm: PropTypes.object.isRequired,
  editAttendeeFormAction: PropTypes.func.isRequired,
  sendAttendeeFormAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: attendeeFormReducer.getStatus(state),
  msg: attendeeFormReducer.getMessage(state),
  formValidationErrors: attendeeFormReducer.getFormValidationErrors(state),
  attendeeForm: attendeeFormReducer.getAttendeeForm(state),
});

export default connect(
  mapStateToProps,
  {
    editAttendeeFormAction: attendeeFormActions.editAttendeeForm,
    sendAttendeeFormAction: attendeeFormActions.sendAttendeeForm,
  },
)(AttendeeForm);
