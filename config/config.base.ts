export interface ConfigBaseProps {
  persistNavigation: 'always' | 'dev' | 'prod' | 'never';
  catchErrors: 'always' | 'dev' | 'prod' | 'never';
  API_URL: string;
  releaseNo: string;
  CLERK_KEY: string;
}

export type PersistNavigationConfig = ConfigBaseProps['persistNavigation'];

const BaseConfig: ConfigBaseProps = {
  // This feature is particularly useful in development mode, but
  // can be used in production as well if you prefer.
  persistNavigation: 'dev',
  /**
   * Only enable if we're catching errors in the right environment
   */
  catchErrors: 'always',
  API_URL: process.env.BASE_URL!,
  releaseNo: '1.0.0',
  CLERK_KEY: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!,
};

export default BaseConfig;
