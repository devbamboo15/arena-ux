import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aux-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {

  @Input() project: string;

  constructor() {
  }

  ngOnInit() {
  }

}
