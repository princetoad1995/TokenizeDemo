import { createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    white: '#FFFFFF',
    white10: '#FFFFFF1A',
    white20: '#FFFFFF33',
    secondary: '#D6DFFF',
    grey0: '#D6E1FF',
    grey1: '#9194BB',
    grey2: '#8E92B2',
    grey3: '#E4E9F9',
    tertiary: '#5073F2',
    light: '#6992FF',
    subLight: '#BDCFFF',
    accent: '#597AF4',
    success: '#3BBA7D',
    error: '#F94B5C',
    surface: '#3D436C',
  },
  darkColors: {
    white: '#FFFFFF',
    secondary: '#D6DFFF',
    grey0: '#D6E1FF',
    grey1: '#9194BB',
    grey2: '#8E92B2',
    grey3: '#E4E9F9',
    tertiary: '#5073F2',
    light: '#6992FF',
    subLight: '#BDCFFF',
    accent: '#597AF4',
    success: '#3BBA7D',
    error: '#F94B5C',
    surface: '#3D436C',
  },
  components: {
    Button: (props, theme) => ({
      disabledStyle: {
        backgroundColor: theme.colors.subLight,
        borderRadius: 5,
      },
      disabledTitleStyle: {
        color: theme.colors.grey2,
        fontFamily: 'Roboto-Bold',
        fontWeight: '700',
        lineHeight: 15,
        fontSize: 13,
      },
      buttonStyle: {
        backgroundColor: theme.colors.light,
        borderRadius: 5,
      },
      titleStyle: {
        color: theme.colors.white,
        fontFamily: 'Roboto-Bold',
        fontWeight: '700',
        lineHeight: 15,
        fontSize: 13,
      },
    }),
    Text: {
      h1Style: {
        fontFamily: 'Roboto-Bold',
        fontWeight: '900',
        lineHeight: 30,
        fontSize: 23,
      },
      h2Style: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
      },
      h3Style: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
      },
      h4Style: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 15,
      },
    },
    Input: (props, theme) => ({
      inputContainerStyle: {
        backgroundColor: theme.colors.white10,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: theme.colors.white20,
        paddingHorizontal: 12,
      },
      inputStyle: {
        paddingHorizontal: 9,
        color: theme.colors.white,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        fontWeight: '500',
      },
    }),
    CheckBox: (props, theme) => ({
      containerStyle: {
        backgroundColor: 'transparent',
        padding: 0,
        marginLeft: 0,
      },
      fontFamily: 'Roboto-Medium',
      textStyle: {
        color: theme.colors.white,
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 6,
      },
    }),
    Card: (props, theme) => ({
      containerStyle: {
        backgroundColor: theme.colors.white,
        borderRadius: 5,
        borderWidth: 0,
      },
      wrapperStyle: {
        flexDirection: 'row',
        padding: 5,
      },
    }),
  },
});

export default theme;
