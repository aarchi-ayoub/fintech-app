import { Colors, Styles } from '@/constants';
import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  containerStyles?: ViewStyle;
  disabled?: boolean;
}
const Button = ({ title, onPress, containerStyles, disabled }: ButtonProps) => {
  const $style = [
    Styles.pillButton,
    styles.container,
    disabled && styles.disabled,
    containerStyles,
  ];
  return (
    <Pressable disabled={disabled} onPress={onPress} style={$style}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 60,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.5,
  },
});
