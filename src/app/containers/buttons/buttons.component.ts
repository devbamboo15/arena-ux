import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

  code1 = `
  <button class="btn btn-white">
    Button white
  </button>
  `;

  code2 = `
  <button class="btn btn-sm btn-rounded-circle btn-white">+</button>
  <button class="btn btn-rounded-circle btn-white">+</button>
  <button class="btn btn-lg btn-rounded-circle btn-white">+</button>
  `;

  code3 = `
  <button class="btn btn-white">
    <i class="far fa-bookmark"></i> Icon Left
  </button>
  <button class="btn btn-primary">
    <i class="far fa-bookmark"></i> Icon Left
  </button>
  <button class="btn btn-white">
    Icon Right <i class="far fa-bookmark"></i>
  </button>
  <button class="btn btn-primary">
    Icon Right <i class="far fa-bookmark"></i>
  </button>
  <button class="btn btn-white">
    <i class="far fa-bookmark"></i>
  </button>
  <button class="btn btn-primary">
    <i class="far fa-bookmark"></i>
  </button>
  <button class="btn btn-rounded-circle btn-white">
    <i class="far fa-star"></i>
  </button>
  <button class="btn btn-rounded-circle btn-primary">
    <i class="far fa-star"></i>
  </button>
  `;

  constructor() {
  }

  ngOnInit() {
  }

}
