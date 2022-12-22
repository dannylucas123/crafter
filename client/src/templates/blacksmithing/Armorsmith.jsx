import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import Node from '../../components/Node/Node';
import Path from '../../components/Path/Path';
import { DOCUMENT_BODY_HEIGHT, DOCUMENT_BODY_WIDTH } from '../../constants/general';

const Armorsmith = () => {
  const [viewBox, setViewBox] = useState({ x: 0, y: 0 });
  console.log(DOCUMENT_BODY_WIDTH);
  console.log(DOCUMENT_BODY_HEIGHT);
  return (
    <Container nodeContainer
        onMouseMove={console.log}>
      <svg
        width={`${DOCUMENT_BODY_WIDTH}px`}
        viewBox={`${viewBox.x} ${viewBox.y} ${DOCUMENT_BODY_WIDTH - 20} ${DOCUMENT_BODY_HEIGHT}`}
      >
        <Path d="m0 100 l-125 100" transform={`translate(${(DOCUMENT_BODY_WIDTH / 2) - 10}, 0)`}/>
        <Path d="m0 100 l-0 100" transform={`translate(${(DOCUMENT_BODY_WIDTH / 2) - 10}, 0)`}/>
        <Path d="m0 100 l125 100" transform={`translate(${(DOCUMENT_BODY_WIDTH / 2) - 10}, 0)`}/>
        <Node cx="50%" cy="70"/>
        <Node cx="50%" cy="240"/>
        <Node cx="10%" cy="240"/>
        <Node cx="90%" cy="240"/>
      </svg>
    </Container>
  );
};

export default Armorsmith;
