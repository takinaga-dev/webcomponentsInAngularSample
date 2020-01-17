import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplePageComponent } from './sample-page/sample-page.component';

const routes: Routes = [
  {
    path: 'sample', component: SamplePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
