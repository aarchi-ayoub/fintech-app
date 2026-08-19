import ArrowBackButton from '@/components/ArrowBackButton';
import colors from '@/constants/Colors';
import '@/lib/i18n';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialRootLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const router = useRouter();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const registerScreenOptions = {
    title: '',
    headerBackTitle: '',
    headerShadowVisible: false,
    headerStyle: { backgroundColor: colors.background },
    headerLeft: () => <ArrowBackButton iconOnPress={router.back} />,
  };

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={registerScreenOptions} />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return <InitialRootLayout />;
};

export default RootLayoutNav;
