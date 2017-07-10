import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Http }                   from '@angular/http';
import { GlossaryService }         from '../glossary.service';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private glossaryService: GlossaryService) { }

    glossary:Array<any> = []

  loadGlossary() {
   this.glossaryService.getGlossary().subscribe(data => this.glossary = data);
 }

  ngOnInit() {
    this.loadGlossary();
  }


}
