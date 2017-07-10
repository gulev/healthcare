import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Http }                   from '@angular/http';
import { GlossaryService }         from '../glossary.service';

@Component({
  selector: 'glossary-modal-content',
  template: `
    <div class="modal-header bg-primary" style="border-color:#337ab7">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title"><span class="fa fa-weibo fa-fw"></span> Details about {{data.title}} in {{data.lang}}</h4>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-lg-12">
          <p><span class="fa fa-home"></span> <b>Path:</b> {{data.path}}</p>
          <p><span class="fa fa-key"></span> <b>Relative Path:</b> {{data.relative_path}}</p>
          <p><span class="fa fa-shield"></span> <b> Published: </b> {{data.published}}</p>
          <p><span class="fa fa-pagelines"></span> <b>Slug:</b> {{data.slug }}</p>
          <p><span class="fa fa-th-large"></span> <b>Type:</b> {{data.type}}</p>
          <p><span class="fa fa-home"></span> <b>Url:</b> {{data.url}}</p>
          <p><span class="fa fa-calendar"></span> <b>Date:</b> {{data.date | date}}</p>
          <p><span class="fa fa-angle-double-right"></span> <b>Draft:</b> {{data.draft}}</p>
          <input type="button" class="btn btn-primary btn-xs" (click)="toggleContent()" value="Toggle Content" />
          <br />
          <br />
          <div [hidden]="hideContent" class="panel panel-primary">

           <div class="panel-body" style="padding:0;">
            <p class="bg-info" [innerHTML]="data.content" style="padding:10px !important; margin-bottom:0px; "></p>
           </div>
         </div>

        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="activeModal.close('Close click')"><span class="fa fa-times-circle-o"></span> Close</button>
    </div>
  `
})
export class GlossaryModalContent {
  constructor(public activeModal: NgbActiveModal) {}
  hideContent: boolean = true;

  toggleContent(){
    this.hideContent = !this.hideContent;
  }
}

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private glossaryService: GlossaryService,
    private modalService: NgbModal
  ) { }

    glossary:Array<any> = []
    glossaryRecord:Array<any>=[];

    showDetails($event: any) {
      this.glossaryRecord = $event;
      console.log(this.glossaryRecord);
      this.open(this.glossaryRecord);
    }
    open(data:any) {
       const modalRef = this.modalService.open(GlossaryModalContent);
       modalRef.componentInstance.data = data;
    }

  loadGlossary() {
   this.glossaryService.getGlossary().subscribe(data => this.glossary = data);
 }

  ngOnInit() {
    this.loadGlossary();
  }


}
