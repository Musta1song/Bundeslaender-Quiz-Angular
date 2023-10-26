import { Component, Input } from '@angular/core';
import { ArraysService } from '../arrays.service';


@Component({
  selector: 'app-landeshauptstadt',
  templateUrl: './landeshauptstadt.component.html',
  styleUrls: ['./landeshauptstadt.component.scss']
})
export class LandeshauptstadtComponent {

 constructor(public av: ArraysService){}

 

}
