import React, { memo, useMemo } from 'react';

import { IconProps } from './types';
import * as icons from '../Icons';

const Icon = ({ name, color, size, fillColor, rotation }: IconProps) => {
  const SvgIcon = useMemo(() => icons[name], [name]);

  if (!SvgIcon) return null;

  return <SvgIcon color={color} rotation={rotation} size={size} fillColor={fillColor} />;
};

export default memo(Icon);
