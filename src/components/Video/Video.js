import React from "react";
import PropTypes from "prop-types";
import DateTime from "../DateTime/DateTime";

const Video = ({ url, date, DateComponent = DateTime }) => (
  <div className="video">
      <iframe title="myFrame" src={url}/>
    <DateComponent date={date} />
  </div>
);

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  DateComponent: PropTypes.elementType
}

export default Video;