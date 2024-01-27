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
    this.ChangeVisibilitiesOnResultpage()
    this.ShowScore()

  }
  ChangeVisibilitiesOnResultpage(){
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
  }
  ShowScore(){
    if(7<=this.points){
      this.number=13
      document.getElementById('output')!.innerHTML = "Glückwunsch! Du hast das Quiz bestanden! <br>  Du hast " + this.points + " von 13 Punkten erreicht!" ;
    }
    else if(6>=this.points){
      this.number=14
      document.getElementById('output')!.innerHTML = "Schade! Du hast das Quiz leider nicht bestanden! <br>  Du hast " + this.points + " von 13 Punkten erreicht!" ;
    }
  }

  CheckAnswerCapital() {
    let CorrectAnswer: string = this.av.Landeshauptstaedte[this.number];
    let SeletedAnswer: string = ((<HTMLInputElement>document.getElementById("enterLandeshauptstadt")).value);
    let OutputQuestionState = this.av.LaenderOhneStadtstaaten[this.number];
    let OutputCorrectState = this.av.Landeshauptstaedte[this.number];

    if (SeletedAnswer === CorrectAnswer && SeletedAnswer != null && this.number < 12) {
      this.IfAnswerIsTrue(OutputQuestionState, OutputCorrectState)
    }
    else if (SeletedAnswer == null) {
      alert("Du musst erst die Lösung absenden!");
    }
    else if (SeletedAnswer === CorrectAnswer && SeletedAnswer != null && this.number === 12) {
      this.LastQuestionIfAnswerIsTrue(OutputQuestionState, OutputCorrectState)
    }
    else if (SeletedAnswer !== CorrectAnswer && SeletedAnswer != null && this.number < 12) {
      this.IfAnswerIsFalse (OutputCorrectState )
    }
    else if (SeletedAnswer !== CorrectAnswer && SeletedAnswer != null && this.number === 12) {
      this.LastQuestionIfAnswerIsFalse(OutputCorrectState)
    }
  }
    reload(){
      window.location.reload();
    }
    LastQuestionIfAnswerIsFalse(OutputCorrectState: string){
      let output: string = "Falsch, die richtige Antwort wäre " + OutputCorrectState + "!";
      document.getElementById('output')!.innerHTML = output;
      const resultBt = document.getElementById("result");
      const answerBt = document.getElementById("answer");
      resultBt!.style.visibility = 'visible';
      answerBt!.style.visibility = 'hidden';


    }
    IfAnswerIsFalse (OutputCorrectState: string ){
      let output: string = "Falsch, die richtige Antwort wäre " + OutputCorrectState + "!";
      document.getElementById('output')!.innerHTML = output;
      this.number = this.number + 1;

    }

    LastQuestionIfAnswerIsTrue(OutputState: string, OutputCorrectState: string ){
      let output: string = "Korrekt!, die Landeshauptstadt von " + OutputState + " ist " + OutputCorrectState + ".";
      document.getElementById('output')!.innerHTML = output;
      this.points = this.points + 1;
      const resultBt = document.getElementById("result");
      resultBt!.style.visibility = 'visible';

    }
    IfAnswerIsTrue(OutputState: string, OutputCorrectState: string ){
      let output: string = "Korrekt!, die Landeshauptstadt von " + OutputState + " ist " + OutputCorrectState + ".";
      document.getElementById('output')!.innerHTML = output;
      this.points = this.points + 1;
      this.number = this.number + 1;
    }
  }


