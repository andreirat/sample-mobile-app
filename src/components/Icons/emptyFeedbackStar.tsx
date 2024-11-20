import React from 'react';
import { Svg, Path } from 'react-native-svg';

import { IconProps } from '../../types/common';

const EmptyFeedbackStar = ({ color, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 47 45" fill="none">
      <Path
        d="M23.5 1L29.688 16.213L46 17.425L33.512 28.038L37.406 44L23.5 35.346L9.594 44L13.488 28.038L1 17.425L17.313 16.214L23.5 1Z"
        stroke={color || '#52577F'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EmptyFeedbackStar;
