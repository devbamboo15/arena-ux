import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  Profile,
  PostalInfo,
  PhoneInfo,
  Bankings,
  PayPals,
  EmailInfo
} from '../models';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface ProfileResponse {
  data: Profile;
}

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  public getCurrentUser(): Observable<Profile> {
    return this.http.get<ProfileResponse>(`user`).pipe(
      map(res => new Profile(res.data))
    );
  }

  public addPostal(postal: PostalInfo, userId: string): Observable<PostalInfo> {
    const formData = new FormData();
    formData.append('postal_city', postal.postalCity);
    formData.append('postal_street', postal.postalStreet);
    formData.append('postal_type', postal.postalType);
    formData.append('postal_zipcode', postal.postalZipcode);
    formData.append('postal_country', postal.postalCountry);
    formData.append('user', userId);

    return this.http.post<ProfileResponse>('user/profile/address', formData).pipe(map(res => new PostalInfo(res.data)));
  }

  public addEmail(email: EmailInfo, userId: string): Observable<EmailInfo> {
    const formData = new FormData();
    formData.append('user_auth_email', email.userAuthEmail);
    formData.append('user', userId);
    return this.http.post<ProfileResponse>('user/profile/email', formData).pipe(map(res => res.data));
  }

  public editName(profile: Profile): Observable<any> {
    const formData = {
      name: profile.name,
      user: profile.userUuid
    };
    return this.http.patch<ProfileResponse>('user/profile/name', formData).pipe(map(res => res.data));
  }

  public deleteEmail(email: string, userId: string): Observable<any> {
    return this.http.delete<ProfileResponse>(`user/profile/email?user_auth_email=${email}&&user=${userId}`);
  }

  public deletePostal(postalId: string, userId: string): Observable<any> {
    return this.http.delete<ProfileResponse>(`user/profile/address?postal=${postalId}&&user=${userId}`);
  }

  public addContact(phone: PhoneInfo, userId: string): Observable<PhoneInfo> {
    const formData = new FormData();
    formData.append('phone_number', phone.phoneNumber);
    formData.append('phone_type', phone.phoneType);
    formData.append('user', userId);
    return this.http.post<ProfileResponse>(`user/profile/phone`, formData).pipe(map(res => res.data));
  }

  public deleteContact(phoneNumber: string, userId: string): Observable<any> {
    return this.http.delete<ProfileResponse>(`user/profile/phone?phone_number=${phoneNumber}&&user=${userId}`);
  }

  public editEmail(email: string, newEmail: string, userId: string): Observable<EmailInfo> {
    const form = {
      old_user_auth_email: email,
      user_auth_email: email,
      flag_primary: true,
      user: userId
    };
    return this.http.patch<ProfileResponse>('user/profile/email', form).pipe(map(res => res.data));
  }

  public editPhone(oldPhone: string, newPhone: string, userId: string): Observable<PhoneInfo> {
    const formData = new FormData();
    formData.append('flag_primary', 'true');
    formData.append('old_phone_number', oldPhone);
    formData.append('new_phone_number', newPhone);
    formData.append('user', userId);
    return this.http.patch<ProfileResponse>('user/profile/phone', formData).pipe(map(res => res.data));
  }

  public addBankAccount(bank: Bankings, userId: string): Observable<Bankings> {
    const formData = new FormData();
    formData.append('account_number', bank.accountNumber);
    formData.append('account_type', bank.accountType);
    formData.append('bank_name', bank.bankName);
    formData.append('routing_number', bank.routingNumber);
    formData.append('user', userId);
    return this.http.post<ProfileResponse>(`user/profile/bank`, formData).pipe(map(res => res.data));
  }

  public deleteBankAccount(bankUuid: string, userId: string): Observable<any> {
    return this.http.delete<ProfileResponse>(`user/profile/bank?bank=${bankUuid}&&user=${userId}`);
  }

  public addPaypal(paypal: PayPals, userId: string): Observable<PayPals> {
    const formData = new FormData();
    formData.append('paypal_email', paypal.paypal);
    formData.append('user', userId);
    return this.http.post<ProfileResponse>(`user/profile/paypal`, formData).pipe(map(res => res.data));
  }

  public deletePaypal(paypal: string, userId: string): Observable<any> {
    return this.http.delete<ProfileResponse>(`user/profile/paypal?paypal=${paypal}&&user=${userId}`);
  }

  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<any>(`user/avatar`, formData).pipe(map(res => res.data));
  }

  public verifyEmail(userId: string): Observable<any> {
    return this.http.post<any>(`email/${userId}/verify`, {});
  }

  public setPrimaryPayment(type: string, paymentMethod: string, userId: string): Observable<any> {
    const formData = {
      flag_primary: true,
      type,
      user: userId
    };
    if (type === 'paypal') {
      Object.assign(formData, {paypal: paymentMethod});
    } else {
      Object.assign(formData, {bank: paymentMethod});
    }
    return this.http.patch<ProfileResponse>(`user/profile/payment/primary`, formData).pipe(map(res => res.data));
  }
}
