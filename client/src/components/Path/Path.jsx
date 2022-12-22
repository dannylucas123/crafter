import React from 'react';
import { DOCUMENT_BODY_HEIGHT, DOCUMENT_BODY_WIDTH } from '../../constants/general';

const Path = ({ d, transform }) => {
  const lineWidth = 10;
  return (
    <path
      className="nodePath"
      stroke="#000"
      strokeWidth={lineWidth}
      strokeLinecap="round"
      transform={transform}
      d={d}
    />
  );
};

export default Path;
