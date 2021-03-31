import {APIModel} from './common.model';

export class Profile implements APIModel {
  aliases: [];
  avatar: string;
  avatarName: any;
  bankings: Bankings[];
  emails: EmailInfo[];
  name: string;
  nameFirst: string;
  nameLast: string;
  nameMiddle: string;
  paypals: PayPals[];
  phones: PhoneInfo[];
  postals: PostalInfo[];
  userUuid: string;

  constructor(input?: any) {
    if (input) {
      this.aliases = input.aliases;
      this.avatar = input.avatar;
      this.avatarName = input.avatar_name;
      this.bankings = input.bankings.map((banking) => new Bankings(banking));
      this.emails = input.emails.map((email) => new EmailInfo(email));
      this.name = input.name;
      this.nameFirst = input.name_first;
      this.nameLast = input.name_last;
      this.nameMiddle = input.name_middle;
      this.paypals = input.paypals.map((paypal) => new PayPals(paypal));
      this.phones = input.phones.map((phone) => new PhoneInfo(phone));
      this.postals = input.postals.map((postal) => new PostalInfo(postal));
      this.userUuid = input.user_uuid;
    }
  }

  serialize(): any {
  }

}

export class Bankings implements APIModel {
  accountNumber?: string;
  accountType?: string;
  bankName?: string;
  bankUuid?: string;
  flagPrimary?: number;
  routingNumber?: string;
  stampCreated?: number;
  stampCreatedBy?: any;
  stampUpdated?: number;
  stampUpdatedBy?: any;
  userUuid?: string;

  constructor(input: any) {
    this.accountNumber = input.account_number;
    this.accountType = input.account_type;
    this.bankName = input.bank_name;
    this.bankUuid = input.bank_uuid;
    this.flagPrimary = input.flag_primary;
    this.routingNumber = input.routing_number;
    this.stampCreated = input.stamp_created;
    this.stampCreatedBy = input.stamp_created_by;
    this.stampUpdated = input.stamp_updated;
    this.stampUpdatedBy = input.stamp_updated_by;
    this.userUuid = input.user_uuid;
    return this;
  }

  serialize(): any {
  }

}

export class EmailInfo implements APIModel {
  flagPrimary?: number;
  flagVerified?: number;
  rowUuid?: string;
  userAuthEmail?: string;

  constructor(input: any) {
    this.flagPrimary = input.flag_primary;
    this.flagVerified = input.flag_verified;
    this.rowUuid = input.row_uuid;
    this.userAuthEmail = input.user_auth_email;
    return this;
  }

  serialize(): any {
  }
}

export class PayPals implements APIModel {
  flagPrimary?: number;
  paypal?: string;
  paypalUuid?: string;
  stampCreated?: number;
  stampCreatedBy?: any;
  stampUpdated?: number;
  stampUpdatedBy?: any;
  userUuid?: string;

  constructor(input: any) {
    this.flagPrimary = input.flag_primary;
    this.paypal = input.paypal;
    this.paypalUuid = input.paypal_uuid;
    this.stampCreated = input.stamp_created;
    this.stampCreatedBy = input.stamp_created_by;
    this.stampUpdated = input.stamp_updated;
    this.stampUpdatedBy = input.stamp_updated_by;
    this.userUuid = input.user_uuid;
    return this;
  }

  serialize(): any {
  }
}

export class PhoneInfo implements APIModel {
  phoneNumber?: string;
  phoneType?: string;
  phoneUuid?: string;

  constructor(input: any) {
    this.phoneNumber = input.phone_number;
    this.phoneType = input.phone_type;
    this.phoneUuid = input.phone_uuid;
    return this;
  }

  serialize(): any {
  }

}

export class PostalInfo implements APIModel {
  flagPrimary: number;
  postalCity: string;
  postalCountry: string;
  postalStreet: string;
  postalType: string;
  postalUuid: string;
  postalZipcode: string;

  constructor(input: any) {
    this.postalCity = input.postal_city;
    this.postalCountry = input.postal_country;
    this.postalStreet = input.postal_street;
    this.postalType = input.postal_type;
    this.postalUuid = input.postal_uuid;
    this.postalZipcode = input.postal_zipcode;
    this.flagPrimary = input.flag_primary;
    return this;
  }

  serialize(): any {
  }
}

