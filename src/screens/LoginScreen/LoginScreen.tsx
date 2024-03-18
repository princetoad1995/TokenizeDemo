import React, { useEffect, useMemo } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { useStyleLogin } from './LoginStyles';
import { LogoSvg, PasswordSvg, UserEmailSvg, bgLogin } from '@/assets/images';
import { Button, CheckBox, Input, Text, useTheme, Icon } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { loginUser } from '@/services';
import { getStorageItem, setStorageItem } from '@/utils/storage-info.helper';
import { EMAIL, PASSWORD } from '@/constants';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const { styles } = useStyleLogin();
  const { theme } = useTheme();
  const { colors } = theme;
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [isRememberMe, setIsRememberMe] = React.useState(false);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: t('common.warning'),
        text2: t('signIn.loginFail'),
        position: 'top',
      });
    }
  }, [error]);

  const onPressShowPassword = () => {
    setIsShowPassword(prev => !prev);
  };

  const onPressRememberMe = () => {
    setIsRememberMe(prev => !prev);
  };

  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <LogoSvg />
        <Text h1 style={styles.titleLable}>
          {t('signIn.title')}
        </Text>
        <Text h2 style={styles.descLabel}>
          {t('signIn.desc')}
        </Text>
      </View>
    );
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      if (isRememberMe) {
        // Save email and password to local storage
        // do not store sensitive data in local storage
        await setStorageItem(EMAIL, values.email);
        await setStorageItem(PASSWORD, values.password);
      } else {
        // Clear email and password from local storage
        await setStorageItem(EMAIL, '');
        await setStorageItem(PASSWORD, '');
      }
      dispatch(
        loginUser({
          email: values.email,
          password: values.password,
        }),
      );
    },
  });

  useEffect(() => {
    const { setValues } = formik;

    (async () => {
      const email = await getStorageItem(EMAIL);
      const password = await getStorageItem(PASSWORD);
      if (email && password) {
        setValues({ email, password });
        setIsRememberMe(true);
      }
    })();
  }, []);

  const renderInput = () => {
    const { values, handleChange, errors, touched, handleBlur } = formik;

    return (
      <View style={styles.containerInput}>
        <Input
          placeholder={t('signIn.email')}
          leftIcon={<UserEmailSvg />}
          placeholderTextColor={colors.grey0}
          value={values.email}
          onChangeText={handleChange('email')}
          errorMessage={touched.email ? errors.email : ''}
          onBlur={handleBlur('email')}
        />
        <Input
          placeholder={t('signIn.password')}
          leftIcon={<PasswordSvg />}
          rightIcon={
            <TouchableOpacity onPress={onPressShowPassword}>
              <Icon
                type="ionicon"
                name={isShowPassword ? 'eye-off-outline' : 'eye-outline'}
                iconStyle={{ color: colors.white }}
              />
            </TouchableOpacity>
          }
          value={values.password}
          onChangeText={handleChange('password')}
          placeholderTextColor={colors.grey0}
          containerStyle={styles.containerStylePassword}
          secureTextEntry={!isShowPassword}
          errorMessage={touched.password ? errors.password : ''}
          onBlur={handleBlur('password')}
        />
        <View style={styles.containerRememberMe}>
          <CheckBox
            title={t('signIn.rememberMe')}
            checked={isRememberMe}
            onPress={onPressRememberMe}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            checkedColor={colors.white}
            uncheckedColor={colors.white20}
          />
          <Text h3 style={styles.forgotPassword}>
            {t('signIn.forgotYourPassword')}
          </Text>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    const { values, errors, handleSubmit } = formik;
    return (
      <View style={styles.containerFooter}>
        <Button
          title={t('signIn.signIn')}
          disabled={
            !(
              values.email &&
              values.password &&
              !errors.email &&
              !errors.password
            )
          }
          titleStyle={styles.btnLabelEnabled}
          disabledTitleStyle={styles.btnLabelDisabled}
          onPress={() => handleSubmit()}
          loading={loading}
        />
        <Text h3 style={styles.dontHaveAccLabel}>
          {t('signIn.dontHaveAccount')}{' '}
          <Text style={styles.signUpLabel}>{t('signIn.signUp')}</Text>
        </Text>
      </View>
    );
  };

  return (
    <ImageBackground source={bgLogin} style={styles.container}>
      <SafeAreaView style={styles.containerSafeArea}>
        {renderHeader()}
        {renderInput()}
        {renderFooter()}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;
