import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpInterceptorModule, HttpInterceptorService }      from 'ng-http-interceptor';
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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    StatesComponent,
    GlossaryComponent,
    QuestionsComponent,
    TopicsComponent,
    NgbdModalContent,
    GlossaryModalContent,
    DashboardComponent
  ],
  entryComponents: [NgbdModalContent, GlossaryModalContent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpInterceptorModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [StatesService, GlossaryService],

  bootstrap: [AppComponent]
})
export class AppModule { }
