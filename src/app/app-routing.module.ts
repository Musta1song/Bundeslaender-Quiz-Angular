import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandeshauptstadtComponent } from './Components/landeshauptstadt/landeshauptstadt.component';

const routes: Routes = [
  
  {
    path: '',
    component: LandeshauptstadtComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }