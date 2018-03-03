import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'cost-modal',
  templateUrl: './cost-modal.component.html',
  styleUrls: ['./cost-modal.component.css']
})
export class CostModalComponent implements OnInit {
	modalRef : BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
