import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { of, concat, Observable, throwError, BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged, tap, switchMap, catchError, debounceTime } from 'rxjs/operators';
import { AutoCompleteService } from './auto-complete.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'aux-autocomplete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit {
  @Input() apiUrl: string;
  @Input() bindLabel = 'name';
  @Input() queryParam: string;
  @Input() placeHolder = 'Enter Something';
  @Input() isMultiSelect = true;
  @Input() value: any;
  @Output() valueSelected = new EventEmitter<any>();

  public data$: Observable<any>;
  public dataLoading = false;
  public dataInput$ = new BehaviorSubject<string>('');
  public autoCompleteForm = new FormGroup({
    value: new FormControl('')
  });
  public readonly minLengthTerm = 3;

  constructor(private autoCompleteService: AutoCompleteService) {
  }

  ngOnInit() {
    if (!this.apiUrl || !this.queryParam) {
      throw new Error('Input params are missing! Please pass \'apiUrl\' and \'queryParams\' inputs to component.');
      return;
    }
    if (this.value) {
      this.validate();
    }
    this.autoCompleteForm.patchValue({
      value: this.value
    });
    this.loadData();


    this.autoCompleteForm.get('value').valueChanges.subscribe(value => {
      if (this.isMultiSelect) {
        this.valueSelected.emit(value);
        return;
      }

      this.valueSelected.emit(value ? [value] : []);
    });
  }

  public loadData(): void {
    this.data$ = concat(
      of([]),
      this.dataInput$.pipe(
        debounceTime(500),
        filter(res => res !== null && res.length >= this.minLengthTerm),
        distinctUntilChanged(),
        tap(() => this.dataLoading = true),
        switchMap(term => {
          return this.autoCompleteService.getUsers(this.apiUrl, this.queryParam, term).pipe(
            catchError(() => of([])),
            tap(() => this.dataLoading = false)
          );
        })
      )
    );
  }


  private validate(): void {

    if (!this.isMultiSelect) {
      if (Array.isArray(this.value)) {
        this.value = this.value[0];
      }
      this.checkProperty(this.value);
    }
    else {
      if (!Array.isArray(this.value)) {
        this.checkProperty(this.value);
        this.value = [this.value];
      }
      else {
        this.value.forEach(val => {
          this.checkProperty(val);
        });
      }
    }
  }

  private checkProperty(value): void {
    if (!value.hasOwnProperty(this.bindLabel)) {
      throw new  Error('Bind Label Values doesn\'t Match the Input value Object! Please pass \'valid\' bind Label \'or\' input Value to component.');
      return;
    }

  }
}
