import React from 'react';
import Image from "next/image";
import PropTypes from 'prop-types';

function Background({src}) {
  return (
    <div className="absolute">
      <Image src={src} alt="something weird" />
    </div>
  );
}

export default Background;
