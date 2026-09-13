import { Button, CountrySelector, TextInput } from '@/components';
import Theme from '@/constants';
import colors from '@/constants/Colors';
import Spacing from '@/constants/Spacing';
import { isValidPhoneNumber } from '@/utils/fromvalidations';
import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import type { Country, CountryCode } from 'react-native-country-picker-modal';

const Login = () => {
  const { t } = useTranslation('login');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;
  const [countryCode, setCountryCode] = useState<CountryCode>('FR');
  const [callingCode, setCallingCode] = useState<string>('33');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [phoneHasError, setPhoneHasError] = useState<boolean>(false);
  const [hasTouchedPhone, setHasTouchedPhone] = useState<boolean>(false);
  const onSelectCountry = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setVisible(false);
  };

  const handlePhoneBlur = useCallback(() => {
    if (!phoneNumber) {
      setPhoneHasError(true);
      setPhoneError('Phone number is required');
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setPhoneHasError(true);
      setPhoneError('Please enter a valid phone number');
      return;
    }

    setPhoneHasError(false);
    setPhoneError('');
  }, [phoneNumber]);

  useEffect(() => {
    if (!hasTouchedPhone) {
      return;
    }
    handlePhoneBlur();
  }, [hasTouchedPhone, phoneNumber, handlePhoneBlur]);

  return (
    <KeyboardAvoidingView
      style={Theme.styles.flex}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={Theme.styles.container}>
        <Text style={Theme.styles.header}>{t('title')}</Text>
        <Text style={Theme.styles.descriptionText}>{t('subTitle')}</Text>
        <View style={Theme.styles.flex}>
          <View style={styles.inputs}>
            <TextInput
              testID="phoneNumber-input"
              placeholder={t('phoneNumberPlaceholder')}
              value={phoneNumber}
              handleTextChange={(val) => {
                const numericValue = val.replace(/\D/g, '');
                if (!hasTouchedPhone) {
                  setHasTouchedPhone(true);
                }
                setPhoneNumber(numericValue);
              }}
              containerStyle={styles.inputContainer}
              onBlur={handlePhoneBlur}
              hasError={phoneHasError}
              errorMessage={phoneError}
              left={() => (
                <CountrySelector
                  countryCode={countryCode}
                  callingCode={callingCode}
                  visible={visible}
                  onOpen={() => setVisible(true)}
                  onClose={() => setVisible(false)}
                  onSelect={onSelectCountry}
                />
              )}
              keyboardType="phone-pad"
              enterKeyHint="done"
              required
              maxLength={9}
            />
          </View>
          <View style={styles.buttonContainerWrapper}>
            <Button
              title={t('button')}
              textStyle={styles.buttonTextStyle}
              containerStyles={styles.buttonContainer}
              disabled={phoneHasError || !phoneNumber}
            />
            <View style={styles.row}>
              <View style={styles.separator} />
              <Text style={styles.orText}>{t('or')}</Text>
              <View style={styles.separator} />
            </View>
            <Button
              title={t('continueWithEmail')}
              textStyle={styles.buttonTextStyle}
              containerStyles={styles.buttonContainer}
              leftComp={() => <Ionicons name="mail-outline" size={24} color={colors.white} />}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  buttonContainerWrapper: { flex: 1, justifyContent: 'flex-end', paddingBottom: Spacing.xl },
  inputs: {
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
  },

  inputContainer: {
    marginVertical: Spacing.md,
  },
  buttonTextStyle: {
    color: colors.white,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: colors.primaryLight,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray300,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.lg,
  },
  orText: {
    color: colors.gray500,
    fontSize: 16,
    fontWeight: '600',
  },
});
