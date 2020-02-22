import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

// Actions
import { requestAttendiesList } from '../../actions/attendiesListActions';

// Reducers
import { getAttendiesList } from '../../reducers/attendiesListReducer';

const AttendiesList = ({ attendiesList, getAttendiesListAction }) => {
  useEffect(() => {
    getAttendiesListAction();
  });

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Event Date</th>
        </tr>
      </thead>
      <tbody>
        {attendiesList.map((attendee, index) => (
          <tr key={attendee.slug}>
            <th scope="row">{index + 1}</th>
            <td>{attendee.firstName}</td>
            <td>{attendee.lastName}</td>
            <td>{attendee.email}</td>
            <td>{dayjs(attendee.eventDate).format('YYYY-MM-DD')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

AttendiesList.propTypes = {
  attendiesList: PropTypes.array.isRequired,
  getAttendiesListAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  attendiesList: getAttendiesList(state),
});

export default connect(
  mapStateToProps,
  {
    getAttendiesListAction: requestAttendiesList,
  },
)(AttendiesList);
