import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modals-documentation',
  templateUrl: './modals-documentation.component.html',
  styleUrls: ['./modals-documentation.component.scss']
})
export class ModalsDocumentationComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

}
