import React from "react";
import PropTypes from "prop-types";
import Video from "../Video/Video";

const VideoList = ({ list, VideoComponent = Video }) => (
  <>
    {list.map((item, index) => (
      <VideoComponent {...item} key={index} />
    ))}
  </>
);

VideoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })),
  VideoComponent: PropTypes.elementType
};

export default VideoList;