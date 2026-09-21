import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

const Help = () => {
  const { t } = useTranslation('common');

  return (
    <View>
      <Text>{t('help')}</Text>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({});
