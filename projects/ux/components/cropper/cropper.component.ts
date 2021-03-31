import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'aux-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss'],
})
export class CropperComponent implements OnInit, AfterViewInit {

  @Input()
  src: string;

  @Input()
  options: Cropper.Options;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const image = document.getElementById('image') as HTMLImageElement;
    const cropper = new Cropper(image, this.options);
  }

}
