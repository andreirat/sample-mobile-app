import React from 'react';
import { Svg, Path } from 'react-native-svg';

import { IconProps } from '../../types/common';

const EmptyStar = ({ color, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 11" fill="none">
      <Path
        d="M6 2.97L6.582 4.3L6.864 4.943L7.584 5L9.066 5.122L7.938 6.066L7.392 6.523L7.554 7.206L7.89 8.606L6.618 7.856L6 7.486L5.382 7.845L4.11 8.586L4.446 7.186L4.608 6.503L4.062 6.05L2.934 5.106L4.416 4.984L5.136 4.926L5.418 4.283L6 2.97ZM6 0L4.314 3.838L0 4.192L3.276 6.93L2.292 11L6 8.841L9.708 11L8.724 6.93L12 4.192L7.686 3.838L6 0Z"
        fill={color || '#FBAC40'}
      />
    </Svg>
  );
};

export default EmptyStar;
