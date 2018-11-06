import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  var ticketStyles = {
    backgroundColor: 'yellow',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    fontFamily: 'Open Sans'
  };

  var ticketH3Styles = {
    backgroundColor: 'green'
  };

  return (
    <div style={ticketStyles}>
      <h3 style={ticketH3Styles}>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
