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
    <div className="container-fluid mt-3">
      <div className="row p-3 border-bottom border-secondary text-white bg-secondary">
        <div className="col-md-1">#</div>
        <div className="col-md-3">First Name</div>
        <div className="col-md-3">Last Name</div>
        <div className="col-md-3">Email</div>
        <div className="col-md-2">Event Date</div>
      </div>
      <div>
        {attendiesList.map((attendee, index) => (
          <div className="row p-3 border-bottom border-secondary" key={attendee.slug}>
            <div className="col-md-1">{index + 1}</div>
            <div className="col-md-3">{attendee.firstName}</div>
            <div className="col-md-3">{attendee.lastName}</div>
            <div className="col-md-3">{attendee.email}</div>
            <div className="col-md-2">{dayjs(attendee.eventDate).format('YYYY-MM-DD')}</div>
          </div>
        ))}
      </div>
    </div>
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
