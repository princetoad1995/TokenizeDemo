import { useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const useStyleLogin = () => {
  const { theme } = useTheme();
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerSafeArea: {
      flex: 1,
    },
    containerHeader: {
      marginTop: 40,
      alignItems: 'center',
    },
    titleLable: {
      color: colors.white,
      marginTop: 24,
    },
    descLabel: {
      color: colors.secondary,
      marginTop: 9,
    },
    containerInput: {
      flex: 1,
      justifyContent: 'center',
    },
    containerStylePassword: {
      marginTop: 10,
    },
    containerRememberMe: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
      paddingHorizontal: 10,
    },
    forgotPassword: {
      color: colors.white,
    },
    containerFooter: {
      paddingHorizontal: 10,
      height: 200,
    },
    btnLabelDisabled: {
      color: colors.tertiary,
      marginVertical: 5,
      lineHeight: 16,
      fontSize: 14,
    },
    btnLabelEnabled: {
      lineHeight: 16,
      fontSize: 14,
      marginVertical: 5,
    },
    dontHaveAccLabel: {
      color: colors.white,
      marginTop: 20,
      textAlign: 'center',
    },
    signUpLabel: {
      color: colors.white,
      fontWeight: '700',
      fontFamily: 'Roboto-Bold',
    },
  });

  return {
    styles,
  };
};
