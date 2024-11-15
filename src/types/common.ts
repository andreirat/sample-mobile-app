import * as icons from '../components/Icons';

export interface IconProps {
  color?: string;
  size?: number;
  fillColor?: string;
  rotation?: number;
}

export type IconName = keyof typeof icons;
