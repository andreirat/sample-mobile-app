import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Text as IText, TextProps as ITextProps } from 'react-native/Libraries/Text/Text';

export enum TextVariantsEnum {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  Body = 'Body',
  Body2 = 'Body2',
  Body3 = 'Body3',
  Body4 = 'Body4',
  Body5 = 'Body5',
  Body6 = 'Body6',
}

export type TextVariants = keyof typeof TextVariantsEnum;

export interface TextProps extends ITextProps {
  ref?: React.LegacyRef<IText>;
  numberOfLines?: number;
  variant: TextVariants;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
}
