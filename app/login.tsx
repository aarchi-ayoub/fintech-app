import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

const Login = () => {
  const { t } = useTranslation('common');

  return (
    <View>
      <Text>{t('login')}</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
