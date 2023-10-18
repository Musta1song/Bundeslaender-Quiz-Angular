import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  OpenLandeshauptstadtQuiz(){

    window.location.replace("./LandeshauptstadtQuiz")

  }

  OpenWappenQuiz(){
    window.location.replace("./WappenQuiz")
  }
}
