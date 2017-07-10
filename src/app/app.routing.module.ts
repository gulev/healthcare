import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatesComponent }   from './states/states.component';
import { GlossaryComponent }   from './glossary/glossary.component';
import { QuestionsComponent }   from './questions/questions.component';
import { TopicsComponent }   from './topics/topics.component';

const routes: Routes = [
  { path: '', redirectTo: '/states', pathMatch: 'full' },
  { path: 'states',  component: StatesComponent },
  { path: 'glossary',  component: GlossaryComponent },
  { path: 'questions',  component: QuestionsComponent },
  { path: 'topics',  component: TopicsComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
