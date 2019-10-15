import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) { }
}

@Component({
    selector: 'app-customer-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})

export class CustomerViewComponent implements OnInit {
    closeResult: string;

    constructor(private modalService: NgbModal) { }
    ngOnInit() { }

    // Open default modal
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    // This function is used in open
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    // Open modal with dark section
    openModal(customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    }

    // Open content with dark section
    openContent() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
