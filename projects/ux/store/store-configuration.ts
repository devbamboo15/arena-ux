import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreConfiguration {
  project = '';
  platform = '';
  apiURL = '';
  production = false;
  signInURL?: string;
  signUpURL?: string;
}

export interface StoreConfigurationParams {
  project: string;
  platform: string;
  apiURL: string;
  production: boolean;
  signInURL?: string;
  signUpURL?: string;
}
