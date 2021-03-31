export class Credentials {
  user: string;
  password: string;
  app = 'office';
  platform = 'web';
}

export class SignUpCredentials {
  email: string;
  nameFirst: string;
  userPassword: string;
  userPasswordConfirmation: string;
}

export class PasswordResetCredential {
  password: string;
  resetId: string;
}

export class AuthTokenResponse {
  data: AuthToken;
}

export class AuthToken {
  auth: {
    expires_in: number;
    access_token: string;
    refresh_token: string;
    token_type: string;
  };
  user: string;
}

export class UserPermission {
  group: string;
  permission: boolean;
}
