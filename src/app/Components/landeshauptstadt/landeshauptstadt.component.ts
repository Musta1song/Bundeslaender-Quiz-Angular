import { Component } from '@angular/core';
import { ArraysService } from 'src/app/Services/arrays/arrays.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-landeshauptstadt',
  templateUrl: './landeshauptstadt.component.html',
  styleUrls: ['./landeshauptstadt.component.scss']
})
export class LandeshauptstadtComponent implements OnInit {

  constructor(public av: ArraysService) { }
  number: number = 0;
  points: number = 0;
  MaxScore: number = 13;
  CapitalStates: any = []
  Wappen: any = []
  SelectedCapital: any

  ngOnInit(): void {
    this.shuffle()
  }
  resultBt() {
    this.ChangeVisibilitiesOnResultpage()
    this.ShowScore()
  }

  ChangeVisibilitiesOnResultpage() {

    const question = document.getElementById('question'); question!.style.visibility = "hidden";
    const question1 = document.getElementById('question1'); question1!.style.visibility = "hidden";
    const question2 = document.getElementById('question2'); question2!.style.visibility = "hidden";


    const select = document.getElementById("enterLandeshauptstadt");
    select!.style.visibility = 'hidden';

    const reloadBt = document.getElementById("reloadbutton");
    reloadBt!.style.visibility = 'visible';

    const resultBt = document.getElementById("result");
    resultBt!.style.visibility = 'hidden';

    const weiterBt = document.getElementById("answer");
    weiterBt!.style.visibility = 'hidden';

  }
  ShowScore() {
    if (7 <= this.points) // Falls der Nutzer mehr als die Hälfte der Fragen richtig beantwortet hat.
    {
      this.number = 13
      document.getElementById('output')!.innerHTML = "Glückwunsch! Du hast das Quiz bestanden! <br>  Du hast " + this.points + " von 13 Punkten erreicht!";

      const src = document.getElementById("img") as HTMLImageElement;
      src!.src = this.av.thumbs[0]
      return
    }

    this.number = 14
    document.getElementById('output')!.innerHTML = "Schade! Du hast das Quiz leider nicht bestanden! <br>  Du hast " + this.points + " von 13 Punkten erreicht!";
    const src = document.getElementById("img") as HTMLImageElement;
    src!.src = this.av.thumbs[1]
  }

  CheckAnswerCapital() {
    let CorrectAnswer: string = this.av.WappenAndState[this.number].Capital; // Die richtige Anwort.
    let SeletedAnswer: string = this.SelectedCapital // Vom Nutzer eingegebene Anwort.
    let OutputQuestionState = this.av.WappenAndState[this.number].State; // Das in der Frage angegebene Bundesland.
    if (SeletedAnswer === CorrectAnswer) {
      if (this.number < 12) { // Bei richtiger Antwort.
        this.IfAnswerIsTrue(OutputQuestionState, CorrectAnswer)
        return
      }
      if (this.number === 12)  // Bei richtiger Antwort und letzter Frage.
        this.LastQuestionIfAnswerIsTrue(OutputQuestionState, CorrectAnswer)
      return

    }
    if (SeletedAnswer !== CorrectAnswer) {
      if (this.number < 12) { // Bei falscher Antwort.
        this.IfAnswerIsFalse(CorrectAnswer)
        return
      }
      if (this.number === 12) { // Bei falscher Antwort und letzter Frage.
        this.LastQuestionIfAnswerIsFalse(CorrectAnswer)
      }
    }
    if (SeletedAnswer === "") {
      alert("Du musst erst eine Antwort auswählen!");
    }
  }
  reload() {
    window.location.reload();
  }

  LastQuestionIfAnswerIsFalse(CorrectAnswer: string) {
    let output: string = "Falsch, die richtige Antwort wäre " + CorrectAnswer + "!";
    document.getElementById('output')!.innerHTML = output;

    const resultBt = document.getElementById("result");
    resultBt!.style.visibility = 'visible';

    const answerBt = document.getElementById("answer");
    answerBt!.style.visibility = 'hidden';
  }

  IfAnswerIsFalse(CorrectAnswer: string) {
    let output: string = "Falsch, die richtige Antwort wäre " + CorrectAnswer + "!";
    document.getElementById('output')!.innerHTML = output;
    this.number++;

  }

  LastQuestionIfAnswerIsTrue(OutputState: string, CorrectAnswer: string) {
    let output: string = "Korrekt!, die Landeshauptstadt von " + OutputState + " ist " + CorrectAnswer + ".";
    document.getElementById('output')!.innerHTML = output;
    this.points++

    const resultBt = document.getElementById("result");
    resultBt!.style.visibility = 'visible';

  }
  IfAnswerIsTrue(OutputState: string, CorrectAnswer: string) {
    let output: string = "Korrekt!, die Landeshauptstadt von " + OutputState + " ist " + CorrectAnswer + ".";
    document.getElementById('output')!.innerHTML = output;
    this.points++
    this.number++
  }
  shuffle() {
    this.CapitalStates = this.av.Landeshauptstaedte.sort(() => Math.random() - 0.5);
    console.log(this.CapitalStates)
    this.Wappen = this.av.WappenAndState.sort(() => Math.random() - 0.5);
    console.log(this.Wappen)

  }
}


