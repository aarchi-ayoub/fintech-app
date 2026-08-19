import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

interface ArrowBackButtonPorps {
  iconOnPress: () => void;
  iconColor?: string;
  iconSize?: number;
}
const ArrowBackButton: React.FC<ArrowBackButtonPorps> = ({
  iconOnPress,
  iconColor = Colors.black,
  iconSize = 25,
}) => {
  return (
    <Pressable onPress={iconOnPress}>
      <Ionicons name={'arrow-back'} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

export default ArrowBackButton;

const styles = StyleSheet.create({});
