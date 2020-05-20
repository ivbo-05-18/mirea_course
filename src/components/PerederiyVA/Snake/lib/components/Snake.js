/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Segment from './Segment';

export default ({ segments, ...props }) => (
  <div>
    {segments.map((position, i) => (
      <Segment
        key={`segment-${i}`}
        index={i}
        {...position}
        {...props}
      />
    ))}
  </div>
);
