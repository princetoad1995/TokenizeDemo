import { StyleSheet } from 'react-native';

export const useStyleMore = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return {
    styles,
  };
};
