import React from 'react';
import ImageResize from "../../components/Shared/ImageResize";

function ProjectPoster({ src, alt, width }) {
  
  return (
    <div>
      <ImageResize src={ src } alt={ alt } containerWidth={ width } containerHeight={ 280 } />
    </div>
  );
}

export default ProjectPoster;
