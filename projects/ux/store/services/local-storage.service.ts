import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  name = 'arena';

  static loadInitialState() {
    const name = 'arena';
    return Object.keys(localStorage).reduce((state: any, storageKey) => {
      if (storageKey.includes(name)) {
        const stateKeys = storageKey.replace(name, '').toLowerCase().split('.').map(key => {
          return key.split('-').map((token, index) => index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1)).join('');
        });
        let currentStateRef = state;
        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
            return;
          }
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }
      return state;
    }, {});
  }

  setItem(key: string, value: any) {
    localStorage.setItem(`${this.name}${key}`, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${this.name}${key}`));
  }

  removeItem(key: string) {
    localStorage.removeItem(`${this.name}${key}`);
  }
}
