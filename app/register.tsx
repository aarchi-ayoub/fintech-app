import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

const Register = () => {
  const { t } = useTranslation('common');

  return (
    <View>
      <Text>{t('register')}</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
