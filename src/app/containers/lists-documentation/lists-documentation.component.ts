import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lists-documentation',
  templateUrl: './lists-documentation.component.html',
  styleUrls: ['./lists-documentation.component.scss']
})
export class ListsDocumentationComponent implements OnInit {

  code1 = `
<ul class="list-group mb-4">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>

<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled" aria-disabled="true">
    Vestibulum at eros
  </a>
</div>
  `;

  code2 = `
<div class="list-group list-group-flush list-group-activity my-n3">
  <div class="list-group-item">
    <div class="row">
      <div class="col-auto">
        <div class="avatar avatar-sm">
          <div class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary">
            <i class="fe fe-mail"></i>
          </div>
        </div>
      </div>
      <div class="col ml-n2">
        <h5 class="mb-1">
          Launchday 1.4.0 update email sent
        </h5>
        <p class="small text-gray-700 mb-0">
          Sent to all 1,851 subscribers over a 24 hour period
        </p>
        <small class="text-muted">
          2m ago
        </small>
      </div>
    </div>
  </div>
</div>
  `;

  code3 = `
<div class="list-group list-group-flush">
  <div class="list-group-item">
    <div class="row">
      <div class="col-auto">
        <div class="avatar avatar-sm">
          <div class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary">
            <i class="fe fe-mail"></i>
          </div>
        </div>
      </div>
      <div class="col ml-n2">
        <p class="small mb-0">
          <strong>Launchday Update email sent</strong> to 1,851 subscribers over a 24 hour period for maximum open and reply rates.
        </p>
        <small class="text-muted">
          2m ago
        </small>
      </div>
    </div>
  </div>
</div>
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
