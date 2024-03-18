import { useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const useStyleLabelItem = () => {
  const { theme } = useTheme();
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.light,
      borderRadius: 8,
      marginHorizontal: 5,
      paddingHorizontal: 25,
      paddingVertical: 10,
    },
    containerNonSelected: {
      backgroundColor: colors.grey3,
      borderRadius: 8,
      marginHorizontal: 5,
      paddingHorizontal: 25,
      paddingVertical: 10,
    },
    btnLabelIsSelected: {
      lineHeight: 15,
      fontSize: 13,
      fontWeight: '500',
      fontFamily: 'Roboto-Medium',
    },
    btnLabeNonSelected: {
      lineHeight: 15,
      fontSize: 13,
      fontWeight: '500',
      fontFamily: 'Roboto-Medium',
      color: colors.grey2,
    },
  });

  return {
    styles,
  };
};
