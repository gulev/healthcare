import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { StatesService }     from './states.service';
import { StatesComponent, NgbdModalContent } from './states/states.component';
import { AppRoutingModule }  from './app.routing.module';
import { GlossaryService }     from './glossary.service';
import { GlossaryComponent, GlossaryModalContent } from './glossary/glossary.component';
import { QuestionsComponent } from './questions/questions.component';
import { TopicsComponent } from './topics/topics.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    StatesComponent,
    GlossaryComponent,
    QuestionsComponent,
    TopicsComponent,
    NgbdModalContent,
    GlossaryModalContent
  ],
  entryComponents: [NgbdModalContent, GlossaryModalContent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [StatesService, GlossaryService],

  bootstrap: [AppComponent]
})
export class AppModule { }
