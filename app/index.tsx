import { Button } from '@/components';
import { useAssets } from 'expo-asset';
import { Link } from 'expo-router';
import { VideoView, useVideoPlayer } from 'expo-video';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
const Page = () => {
  const { t } = useTranslation('home');
  const [assets] = useAssets(require('@/assets/videos/intro.mp4'));
  const player = useVideoPlayer(assets?.[0]?.uri ?? null, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      {!!assets && (
        <VideoView player={player} style={styles.video} contentFit="cover" nativeControls={false} />
      )}
      <View style={styles.header}>
        <Text style={styles.headerText}>{t('header')}</Text>
      </View>
      <View style={styles.button}>
        <Link href={'/login'} asChild>
          <Button title={t('login')} />
        </Link>
        <Link href={'/register'} asChild>
          <Button title={t('register')} />
        </Link>
      </View>
    </View>
  );
};

export default Page;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    marginTop: 80,
    padding: 20,
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerText: {
    fontSize: 36,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white',
    lineHeight: 44,
    letterSpacing: 0.4,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 60,
    paddingHorizontal: 10,
    gap: 10,
  },
});
