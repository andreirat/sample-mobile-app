import React from 'react';
import { Svg, Path } from 'react-native-svg';

import { IconProps } from '../../types/common';

const Arrow = ({ color, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 19" fill="none">
      <Path
        d="M1 9.50101H21"
        stroke={color || 'white'}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.332 1L1 9.5L9.332 18"
        stroke={color || 'white'}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Arrow;
