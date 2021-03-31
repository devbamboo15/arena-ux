import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  code1 = `
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">Card Title</h3>
      <p class="card-text">
        ...
      </p>
      <a class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `;

  code2 = `
  <div class="card">
    <div class="card-header">
      <h4 class="card-header-title">
        Card title
      </h4>
    </div>
  </div>
  `;

  code3 = `
  <div class="card">
    <div class="card-header">

      <h4 class="card-header-title mr-auto">
        Card title
      </h4>

      <ul class="nav nav-tabs nav-tabs-sm card-header-tabs">
        <li class="nav-item">
          <a href="#" class="nav-link active">Active</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Link</a>
        </li>
      </ul>
    </div>
  </div>
  `;

  code4 = `
  <div class="card card-inactive">
    <div class="card-body">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis tempora architecto, sit a repellat dignissimos
      consequatur mollitia qui consequuntur recusandae numquam voluptate maiores, non cumque illo laboriosam sint
      dolores. Nostrum.
    </div>
  </div>
  `;

  code5 = `
  <div class="card card-fill">
    <div class="card-body">...</div>
  </div>

  <div class="card card-fill-sm">
    <div class="card-body">...</div>
  </div>

  <div class="card card-fill-md">
    <div class="card-body">...</div>
  </div>

  <div class="card card-fill-lg">
    <div class="card-body">...</div>
  </div>

  <div class="card card-fill-xl">
    <div class="card-body">...</div>
  </div>
  `;

  code6 = `
  <div class="card card-adjust">
    <div class="card-body">...</div>
  </div>

  <div class="card card-adjust-sm">
    <div class="card-body">...</div>
  </div>

  <div class="card card-adjust-md">
    <div class="card-body">...</div>
  </div>

  <div class="card card-adjust-lg">
    <div class="card-body">...</div>
  </div>

  <div class="card card-adjust-xl">
    <div class="card-body">...</div>
  </div>
  `;

  constructor() {
  }

  ngOnInit() {
  }

}
