import React, { memo } from 'react';
import { Text as IText } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import stylesheet from './styles';
import { TextProps } from './types';

const Text: React.FC<TextProps> = ({ onPress, style, children, ref, numberOfLines, variant, color, ...props }) => {
  const { styles } = useStyles(stylesheet, { variant });
  return (
    <IText
      {...props}
      onPress={onPress || undefined}
      ref={ref}
      numberOfLines={numberOfLines}
      style={[styles.text, styles.extraStyle(color), style]}
    >
      {children}
    </IText>
  );
};

export default memo(Text);
