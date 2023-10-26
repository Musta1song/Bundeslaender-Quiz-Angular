import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandeshauptstadtComponent } from './landeshauptstadt/landeshauptstadt.component';
import { StartComponent } from './start/start.component';
import { WappenComponent } from './wappen/wappen.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'LandeshauptstadtQuiz',
    component: LandeshauptstadtComponent
  },
  {
    path: 'WappenQuiz',
    component: WappenComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }