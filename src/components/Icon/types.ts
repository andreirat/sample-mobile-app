import * as icons from '../Icons';

export interface IconProps {
  name: keyof typeof icons;
  fillColor?: string;
  color?: string;
  size?: number;
  rotation?: number;
}
