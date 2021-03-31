import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'aux-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperComponent),
      multi: true
    }
  ]
})
export class StepperComponent implements ControlValueAccessor {

  @Input()
  _counterValue = 0;

  @Input()
  step = 1;

  @Input()
  minValue;

  @Input()
  maxValue;

  @Output()
  changedStepper = new EventEmitter<number>();

  propagateChange = (_: any) => {
  }

  constructor() {
  }

  get counterValue() {
    return +this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = +val;
    this.propagateChange(+this._counterValue);
    this.changedStepper.emit(+this._counterValue);
  }

  increment() {
    if (this.maxValue !== undefined && this.counterValue + this.step > this.maxValue) {
      return;
    }
    this.counterValue = +this.counterValue + +this.step;
  }

  decrement() {
    if (this.minValue !== undefined && this.counterValue - this.step < this.minValue) {
      return;
    }
    this.counterValue = +this.counterValue - +this.step;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.counterValue = +obj;
  }

  counterChanged(event) {
    if (this._counterValue > this.maxValue) {
      this.counterValue = this.maxValue;
      return;
    }
    if (this._counterValue < this.minValue) {
      this.counterValue = this.minValue;
      return;
    }
    this.counterValue = +this._counterValue;
  }

  valueUpdated(event) {
    this.counterValue = +this._counterValue;
  }
}
