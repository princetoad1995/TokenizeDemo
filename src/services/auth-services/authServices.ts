import ApiClient from '../ApiClient';
import { LoginRequestProps, LoginResponseProps } from './types';

class AuthServices {
  public static async login({ email, password }: LoginRequestProps) {
    try {
      const response = await ApiClient.post('/mobile-api/auth/login', {
        email,
        password,
        captcha: 'yWOEjZMIhY',
        captchaBypass: 'yWOEjZMIhY',
      });
      return response as LoginResponseProps;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthServices;
