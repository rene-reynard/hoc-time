import React from "react";
import PropTypes from "prop-types";

const DateTime = ({ date }) => (
  <p className="date">{date}</p>
);

DateTime.propTypes = {
  date: PropTypes.string.isRequired
}

export default DateTime;