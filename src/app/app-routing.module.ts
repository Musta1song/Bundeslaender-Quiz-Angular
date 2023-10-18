import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandeshauptstadtComponent } from './landeshauptstadt/landeshauptstadt.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
  path: 'LandeshauptstadtQuiz',
  component: LandeshauptstadtComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }