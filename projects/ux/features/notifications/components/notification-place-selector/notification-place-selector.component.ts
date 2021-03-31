import {
  Component, forwardRef,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'aux-notification-place-selector',
  templateUrl: './notification-place-selector.component.html',
  styleUrls: ['./notification-place-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NotificationPlaceSelectorComponent),
      multi: true
    }
  ]
})
export class NotificationPlaceSelectorComponent implements ControlValueAccessor {

  _placeValue = '';

  notificationPlaces = [
    'top-left',
    'top-middle',
    'top-right',
    'middle-left',
    'middle-middle',
    'middle-right',
    'bottom-left',
    'bottom-middle',
    'bottom-right',
  ];

  get placeValue() {
    return this._placeValue;
  }

  set placeValue(val) {
    this._placeValue = val;
    this.propagateChange(this._placeValue);
  }

  propagateChange = (_: any) => {
  }

  constructor() {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.placeValue = obj;
  }
}
