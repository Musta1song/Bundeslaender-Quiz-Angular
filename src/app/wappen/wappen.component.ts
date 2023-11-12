import { Component, Input } from '@angular/core';
import { ArraysService } from '../arrays.service';


@Component({
  selector: 'app-wappen',
  templateUrl: './wappen.component.html',
  styleUrls: ['./wappen.component.scss']
})
export class WappenComponent {
  constructor(public av: ArraysService){}

}
