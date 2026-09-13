import * as SecureStore from 'expo-secure-store';

/**
 * Stores a string value securely.
 */
export const setItem = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

/**
 * Retrieves a string value from secure storage.
 */
export const getItem = async (key: string) => {
  return SecureStore.getItemAsync(key);
};

/**
 * Removes a value from secure storage.
 */
export const removeItem = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};

/**
 * Stores an object securely by serializing it to JSON.
 */
export const setObject = async <T>(key: string, value: T) => {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
};

/**
 * Retrieves and parses an object from secure storage.
 */
export const getObject = async <T>(key: string): Promise<T | null> => {
  const value = await SecureStore.getItemAsync(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value) as T;
};

/**
 * Removes multiple values from secure storage.
 */
export const removeItems = async (keys: string[]) => {
  await Promise.all(keys.map((key) => SecureStore.deleteItemAsync(key)));
};

/**
 * Clears the specified values from secure storage.
 */
export const clear = async (keys: string[]) => {
  await removeItems(keys);
};
