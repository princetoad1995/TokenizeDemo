import AsyncStorage from '@react-native-async-storage/async-storage';

const deleteStoreKey = async (key: string) => {
  return AsyncStorage.removeItem(key);
};

const getStorageItem = async (key: string) => {
  return AsyncStorage.getItem(key);
};

const setStorageItem = async (key: string, value: string) => {
  return AsyncStorage.setItem(key, value);
};

export { deleteStoreKey, getStorageItem, setStorageItem };
