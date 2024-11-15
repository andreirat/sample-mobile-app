import * as icons from '../Icons';

export interface IconButtonProps {
  iconName: keyof typeof icons;
  iconSize?: number;
  onPress: () => void;
}
