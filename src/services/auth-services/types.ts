export interface LoginRequestProps {
  email: string;
  password: string;
}

export interface LoginResponseProps {
  userId: string;
  canAccessApi: boolean;
  email: string;
  roleId: number;
  roleName: string;
  roleType: string;
  is2Faenabled: number;
  emailNotificationStatus: boolean;
  tkxTrading: boolean;
  userType: string;
  token: string;
  refreshToken: string;
}
