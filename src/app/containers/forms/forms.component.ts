import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {

  code1 = `
  <form>
    <div class="form-row">
      <div class="col-12 col-md-6 mb-3">
        <label for="validationServer01">First name</label>
        <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name"
               value="Mark" required="">
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <label for="validationServer02">Last name</label>
        <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"
               value="Otto" required="">
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="col-12 col-md-6 mb-3">
        <label for="validationServer03">City</label>
        <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required="">
        <div class="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <label for="validationServer04">State</label>
        <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State"
               required="">
        <div class="invalid-feedback">
          Please provide a valid state.
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required="">
        <label class="form-check-label" for="invalidCheck3">
          Agree to terms and conditions
        </label>
        <div class="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Submit form</button>
  </form>
  `;

  code2 = `
  <input type="text" class="form-control form-control-rounded" placeholder="Form control rounded">
  `;

  code3 = `
  <input type="text" class="form-control form-control-flush" placeholder="Form control flush">
  `;

  code4 = `
  <input type="text" class="form-control form-control-flush form-control-auto bg-light"
        placeholder="Form control auto">
  `;

  code5 = `
  <div class="input-group input-group-merge mb-3">
    <input type="text" class="form-control form-control-prepended" placeholder="Input group prepended">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <i class="far fa-eye"></i>
      </div>
    </div>
  </div>
  <div class="input-group input-group-merge mb-3">
    <input type="text" class="form-control form-control-appended" placeholder="Input group appended">
    <div class="input-group-append">
      <div class="input-group-text">
        <i class="fas fa-lock-alt"></i>
      </div>
    </div>
  </div>
  <div class="input-group input-group-merge mb-3">
    <input type="text" class="form-control form-control-prepended is-valid" placeholder="Input group prepended">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <i class="far fa-eye"></i>
      </div>
    </div>
  </div>
  <div class="input-group input-group-merge">
    <input type="text" class="form-control form-control-appended is-invalid" placeholder="Input group appended">
    <div class="input-group-append">
      <div class="input-group-text">
        <i class="fas fa-lock-alt"></i>
      </div>
    </div>
  </div>
  `;

  code6 = `
  <div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="customSwitch1">
    <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
  </div>
  `;

  code7 = `
  <div class="row">
    <div class="col-xs-12 col-12 col-md-4 form-group">
      <input type="text"
             placeholder="Datepicker"
             class="form-control"
             [bsConfig]="{ adaptivePosition: true }"
             bsDatepicker>
    </div>
    <div class="col-xs-12 col-12 col-md-4 form-group">
      <input type="text"
             placeholder="Daterangepicker"
             class="form-control"
             [bsConfig]="{ adaptivePosition: true }"
             bsDaterangepicker>
    </div>
  </div>
  `;

  code8 = `
  <div class="form-group">
      <label for="exampleFormControlSelect2">Example searchable select</label>
      <ng-select id="exampleFormControlSelect2"
                 placeholder="Searchable Select"
                 class="form-control"></ng-select>
    </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example simple select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect3">Invalid ng-select</label>
    <ng-select id="exampleFormControlSelect3"
               placeholder="Searchable Select"
               class="form-control is-invalid"></ng-select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect4">Valid ng-select</label>
    <ng-select id="exampleFormControlSelect4"
               placeholder="Searchable Select"
               class="form-control is-valid"></ng-select>
  </div>
  `;

  bsConfig = {containerClass: 'theme-arena'};

  constructor() {

  }

  ngOnInit() {
  }

}
