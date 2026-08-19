import colors from '@/constants/Colors';
import Styles from '@/constants/Styles';
import React from 'react';
import { Pressable, StyleSheet, Text, type TextStyle, type ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  containerStyles?: ViewStyle;
  disabled?: boolean;
  textStyle?: TextStyle;
}
const Button = ({ title, onPress, containerStyles, disabled, textStyle }: ButtonProps) => {
  const $style = [
    Styles.pillButton,
    styles.container,
    disabled && styles.disabled,
    containerStyles,
  ];
  return (
    <Pressable disabled={disabled} onPress={onPress} style={$style}>
      <Text style={[textStyle, styles.text]}>{title}</Text>
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
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.5,
  },
});
