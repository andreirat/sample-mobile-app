import React from 'react';
import { Svg, Path } from 'react-native-svg';

import { IconProps } from '../../types/common';

const BackLight = ({ size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M6 16.501H26"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.332 8L6 16.5L14.332 25"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackLight;
