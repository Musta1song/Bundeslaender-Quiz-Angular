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
    if(7<=this.points) // Falls der Nutzer mehr als die Hälfte der Fragen richtig beantwortet hat.
    {
      this.number=13
      document.getElementById('output')!.innerHTML = "Glückwunsch! Du hast das Quiz bestanden! <br>  Du hast " + this.points + " von 13 Punkten erreicht!" ;
    }
    else if(6>=this.points) // Falls der Nutzer weniger als die Hälfte der Fragen richtig beantwortet hat
    {
      this.number=14
      document.getElementById('output')!.innerHTML = "Schade! Du hast das Quiz leider nicht bestanden! <br>  Du hast " + this.points + " von 13 Punkten erreicht!" ;
    }
  }

  CheckAnswerCapital() {
    let CorrectAnswer: string = this.av.Landeshauptstaedte[this.number]; // Die richtige Anwort.
    let SeletedAnswer: string = ((<HTMLInputElement>document.getElementById("enterLandeshauptstadt")).value); // Vom Nutzer eingegebene Anwort.
    let OutputQuestionState = this.av.LaenderOhneStadtstaaten[this.number]; // Das in der Frage angegebene Bundesland.

    if (SeletedAnswer === CorrectAnswer && SeletedAnswer != null && this.number < 12) { // Bei richtiger Antwort.
      this.IfAnswerIsTrue(OutputQuestionState, CorrectAnswer)
    }
    else if (SeletedAnswer === CorrectAnswer && SeletedAnswer != null && this.number === 12) { // Bei richtiger Antwort und letzter Frage.
      this.LastQuestionIfAnswerIsTrue(OutputQuestionState, CorrectAnswer)
    }
    else if (SeletedAnswer !== CorrectAnswer && SeletedAnswer != null && this.number < 12) { // Bei falscher Antwort.
      this.IfAnswerIsFalse (CorrectAnswer )
    }
    else if (SeletedAnswer !== CorrectAnswer && SeletedAnswer != null && this.number === 12) { // Bei falscher Antwort und letzter Frage.
      this.LastQuestionIfAnswerIsFalse(CorrectAnswer)
    }
  }
    reload(){
      window.location.reload();
    }
    LastQuestionIfAnswerIsFalse(CorrectAnswer: string){
      let output: string = "Falsch, die richtige Antwort wäre " + CorrectAnswer + "!";
      document.getElementById('output')!.innerHTML = output;
      const resultBt = document.getElementById("result");
      const answerBt = document.getElementById("answer");
      resultBt!.style.visibility = 'visible';
      answerBt!.style.visibility = 'hidden';


    }
    IfAnswerIsFalse (CorrectAnswer: string ){
      let output: string = "Falsch, die richtige Antwort wäre " + CorrectAnswer + "!";
      document.getElementById('output')!.innerHTML = output;
      this.number = this.number + 1;

    }

    LastQuestionIfAnswerIsTrue(OutputState: string, CorrectAnswer: string ){
      let output: string = "Korrekt!, die Landeshauptstadt von " + OutputState + " ist " + CorrectAnswer + ".";
      document.getElementById('output')!.innerHTML = output;
      this.points = this.points + 1;
      const resultBt = document.getElementById("result");
      resultBt!.style.visibility = 'visible';

    }
    IfAnswerIsTrue(OutputState: string, CorrectAnswer: string ){
      let output: string = "Korrekt!, die Landeshauptstadt von " + OutputState + " ist " + CorrectAnswer + ".";
      document.getElementById('output')!.innerHTML = output;
      this.points = this.points + 1;
      this.number = this.number + 1;
    }
  }


