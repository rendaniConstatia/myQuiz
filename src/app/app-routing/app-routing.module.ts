import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from 'src/start/start.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { CounterComponent } from '../counter/counter.component';
import { QuizComponent } from '../quiz/quiz.component';

const routes: Routes = [
  
  { path: '', component: CounterComponent },
  { path: 'start', component: QuizComponent }

]
@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
