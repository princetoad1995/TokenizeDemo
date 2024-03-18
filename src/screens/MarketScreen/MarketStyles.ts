import { useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const useStyleMarket = () => {
  const { theme } = useTheme();
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerHeader: {
      paddingHorizontal: 15,
      paddingBottom: 5,
    },
    containerSearch: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    headerLabel: {
      lineHeight: 16,
      fontSize: 16,
      fontWeight: '700',
      fontFamily: 'Roboto-Bold',
    },
  });

  return {
    styles,
  };
};
