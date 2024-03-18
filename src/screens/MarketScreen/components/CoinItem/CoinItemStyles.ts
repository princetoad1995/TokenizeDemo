import { useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const useStyleCoinItem = () => {
  const { theme } = useTheme();
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: colors.white,
    },
    img: {
      width: 38,
      height: 38,
      borderRadius: 5,
    },
    containerCoinName: {
      paddingHorizontal: 15,
      flex: 1,
    },
    marketIdLabel: {
      fontFamily: 'Roboto-Bold',
      fontWeight: '700',
      lineHeight: 17,
      fontSize: 15,
      color: colors.surface,
    },
    lastPriceLabel: {
      fontFamily: 'Roboto-Bold',
      fontWeight: '500',
      lineHeight: 17,
      fontSize: 15,
      color: colors.surface,
    },
    marketNameLabel: {
      color: colors.grey2,
    },
    containerMoney: {
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    containerPercent: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    percentGreenLabel: {
      color: colors.success,
    },
    percentRedLabel: {
      color: colors.error,
    },
    arrowImg: {
      width: 4,
      height: 7,
      marginBottom: 2.5,
    },
  });

  return {
    styles,
  };
};
