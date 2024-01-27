import { Component, Input } from '@angular/core';
import { ArraysService } from 'src/app/Services/arrays/arrays.service';

@Component({
  selector: 'app-landeshauptstadt',
  templateUrl: './landeshauptstadt.component.html',
  styleUrls: ['./landeshauptstadt.component.scss']
})
export class LandeshauptstadtComponent {

  constructor(public av: ArraysService) { }
  number: number = 0;
  points: number = 0;
  MaxScore: number = 13;

  resultBt() {
    document.getElementById('question1')!.innerHTML = "";
    document.getElementById('question3')!.innerHTML = "";
    const select = document.getElementById("enterLandeshauptstadt");
    const reloadBt = document.getElementById("reloadbutton");
    const resultBt = document.getElementById("result");
    const weiterBt = document.getElementById("answer");
    resultBt!.style.visibility = 'hidden';
    weiterBt!.style.visibility = 'hidden';
    select!.style.visibility = 'hidden';
    reloadBt!.style.visibility = 'visible';


    if(7<=this.points){
      this.number=13
      document.getElementById('output')!.innerHTML = "Glückwunsch! Sie haben das Quiz bestanden! <br>  Sie haben " + this.points + " von 13 Punkten erreicht!" ;
    }
    else if(6>=this.points){
      this.number=14
      document.getElementById('output')!.innerHTML = "Schade! Sie haben das Quiz leider nicht bestanden! <br>  Sie haben " + this.points + " von 13 Punkten erreicht!" ;
    }



  }

  CheckAnswerCapital() {
    let correctanswer: string = this.av.Landeshauptstädte[this.number];
    let answer: string = ((<HTMLInputElement>document.getElementById("enterLandeshauptstadt")).value);
    let a = this.av.ohneStadtstaaten[this.number];
    let b = this.av.Landeshauptstädte[this.number];

    if (answer === correctanswer && answer != null && this.number < 12) {
      let output: string = "Korrekt!, die Landeshauptstadt von " + a + " ist " + b + ".";
      document.getElementById('output')!.innerHTML = output;
      this.points = this.points + 1;
      this.number = this.number + 1;
    }
    else if (answer == null) {
      alert("Du musst erst die Lösung absenden!");
    }
    else if (answer === correctanswer && answer != null && this.number === 12) {
      let output: string = "Korrekt!, die Landeshauptstadt von " + a + " ist " + b + ".";
      document.getElementById('output')!.innerHTML = output;
      this.points = this.points + 1;
      const resultBt = document.getElementById("result");
      resultBt!.style.visibility = 'visible';
    }
    else if (answer !== correctanswer && answer != null && this.number < 12) {
      let output: string = "Falsch, die richtige Antwort wäre " + b + "!";
      document.getElementById('output')!.innerHTML = output;
      this.number = this.number + 1;

    }
    else if (answer !== correctanswer && answer != null && this.number === 12) {
      let output: string = "Falsch, die richtige Antwort wäre " + b + "!";
      document.getElementById('output')!.innerHTML = output;
      const resultBt = document.getElementById("result");
      const answerBt = document.getElementById("answer");
      resultBt!.style.visibility = 'visible';
      answerBt!.style.visibility = 'hidden';


    }
  }
    reload(){
      window.location.reload();
    }
  }


