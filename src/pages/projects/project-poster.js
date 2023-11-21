import React from 'react';
import PropTypes from 'prop-types';
import ImageResize from "../../components/Shared/ImageResize";

ProjectPoster.propTypes = {

};

function ProjectPoster({ src, alt, width }) {
  
  return (
    <div>
      <ImageResize src={src} alt={alt} containerWidth={width} containerHeight={280} />
    </div>
  );
}

export default ProjectPoster
