import {Injectable} from '@angular/core';

@Injectable()
export class SupplementalPanelOptions {
  id?: number;
  position?: 'left' | 'right';
  ignoreBackDropClick?: boolean;
  ignoreEscClick?: boolean;
  isShown?: boolean;
  width?: number;
}

export const supplementalConfigDefaults: SupplementalPanelOptions = {
  id: (new Date()).getUTCMilliseconds(),
  position: 'left',
  ignoreBackDropClick: false,
  ignoreEscClick: false,
  isShown: false,
  width: 500,
};
