import { Button, CountrySelector, TextInput } from '@/components';
import colors from '@/constants/Colors';
import Spacing from '@/constants/Spacing';
import Styles from '@/constants/Styles';
import { isValidPhoneNumber } from '@/utils/fromvalidations';
import { useSignUp } from '@clerk/expo';
import { Link, useRouter } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { type Country, type CountryCode } from 'react-native-country-picker-modal';

const Register = () => {
  const { t } = useTranslation('signUp');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 120 : 0;
  const [countryCode, setCountryCode] = useState<CountryCode>('FR');
  const [callingCode, setCallingCode] = useState('33');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [visible, setVisible] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [phoneHasError, setPhoneHasError] = useState<boolean>(false);
  const [hasTouchedPhone, setHasTouchedPhone] = useState(false);
  const router = useRouter();
  const { signUp } = useSignUp();

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

  const onSingUp = async () => {
    try {
      const fullPhoneNumber = `+${callingCode}${phoneNumber}`;

      await signUp.create({
        phoneNumber: fullPhoneNumber,
      });

      router.push({
        pathname: '/verify/[phone]',
        params: { phone: fullPhoneNumber },
      });
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  useEffect(() => {
    if (!hasTouchedPhone) {
      return;
    }
    handlePhoneBlur();
  }, [hasTouchedPhone, phoneNumber, handlePhoneBlur]);

  return (
    <KeyboardAvoidingView
      style={Styles.flex}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={Styles.container}>
        <Text style={Styles.header}>{t('title')}</Text>

        <Text style={Styles.descriptionText}>{t('subTitle')}</Text>

        <View style={Styles.flex}>
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

          <Link href="/login" asChild replace style={Styles.textLink}>
            <Text>{t('backToLogin')}</Text>
          </Link>
        </View>

        <Button
          title={t('button')}
          textStyle={styles.buttonTextStyle}
          containerStyles={styles.buttonContainer}
          disabled={phoneHasError || !phoneNumber}
          onPress={onSingUp}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  inputs: {
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
  },

  inputContainer: {
    marginVertical: Spacing.md,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: colors.primaryLight,
  },
  buttonTextStyle: {
    color: colors.white,
  },
});
