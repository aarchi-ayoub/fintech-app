import colors from '@/constants/Colors';
import Styles from '@/constants/Styles';
import React from 'react';
import { Pressable, StyleSheet, Text, View, type TextStyle, type ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  containerStyles?: ViewStyle;
  disabled?: boolean;
  textStyle?: TextStyle;
  leftComp?: () => React.JSX.Element;
  rightComp?: () => React.JSX.Element;
}
const Button = ({
  title,
  onPress,
  containerStyles,
  disabled,
  textStyle,
  leftComp,
  rightComp,
}: ButtonProps) => {
  const $style = [
    Styles.pillButton,
    styles.container,
    disabled && styles.disabled,
    containerStyles,
  ];
  return (
    <Pressable disabled={disabled} onPress={onPress} style={$style}>
      {!!leftComp && <View style={styles.left}>{leftComp()}</View>}
      <Text style={[textStyle, styles.text]}>{title}</Text>
      {!!rightComp && <View style={styles.right}>{rightComp()}</View>}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 60,
    justifyContent: 'center',
    backgroundColor: colors.textInverse,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.5,
  },
  left: {
    marginRight: 8,
  },

  right: {
    marginLeft: 8,
  },
});
