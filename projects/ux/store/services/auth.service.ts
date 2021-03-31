import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Credentials, PasswordResetCredential, SignUpCredentials } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signIn(request: Credentials) {
    return this.http.post<any>(`core/auth/signin`, request);
  }

  signOut() {
    return this.http.delete<any>(`core/auth/signout`);
  }

  getProfile() {
    return this.http.get<any>(`core/auth/index`);
  }

  refreshToken(refreshToken: string) {
    return this.http.patch<any>(`core/auth/refresh`, {refresh_token: refreshToken});
  }

  getUserPermission() {
    return this.http.get<any>('core/auth?group=Arena.Developers&permission=Arena.Developers.Default');
  }

  forgetPassword(email) {
    return this.http.post<any>('core/auth/forgot-password', {email});
  }

  passwordReset(credentials: PasswordResetCredential) {
    return this.http.patch<any>(`core/auth/password-reset/${credentials.resetId}`, {new_password: credentials.password});
  }

  signUp(request: SignUpCredentials): Observable<any> {
    const requestParam = {
      email: request.email,
      name_first: request.nameFirst,
      user_password: request.userPassword,
      user_password_confirmation: request.userPasswordConfirmation
    };
    return this.http.post<any>('core/auth/signup', requestParam );
  }
}
