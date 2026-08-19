import colors from '@/constants/Colors';
import Spacing from '@/constants/Spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import CountryPicker, { type Country, type CountryCode } from 'react-native-country-picker-modal';

type CountrySelectorProps = {
  countryCode: CountryCode;
  callingCode: string;
  visible: boolean;
  onOpen: () => void;
  onClose: () => void;
  onSelect: (country: Country) => void;
};

const CountrySelector = ({
  countryCode,
  callingCode,
  visible,
  onOpen,
  onClose,
  onSelect,
}: CountrySelectorProps) => {
  return (
    <Pressable style={styles.countryButton} onPress={onOpen}>
      <CountryPicker
        countryCode={countryCode}
        withFilter
        withFlag
        withCallingCode
        withEmoji
        visible={visible}
        onSelect={onSelect}
        onClose={onClose}
      />

      <Text style={styles.callingCode}>+{callingCode}</Text>

      <Ionicons name="caret-down" size={15} />
    </Pressable>
  );
};

export default CountrySelector;

const styles = StyleSheet.create({
  countryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: 16,
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    maxHeight: 50,
    padding: 8,
  },

  callingCode: {
    marginRight: Spacing.xs,
    fontSize: 16,
  },
});
