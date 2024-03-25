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
  Flag: any = []
  SelectedCapital: any

  ngOnInit(): void {
    this.shuffle()
  }
  resultBt() {
    this.ChangeVisibilitiesOnResultpage()
    this.ShowScore()
  }

  ChangeVisibilitiesOnResultpage() {
    document.getElementById('question')!.style.visibility = "hidden";
    document.getElementById('question1')!.style.visibility = "hidden";
    document.getElementById('question2')!.style.visibility = "hidden";
    document.getElementById("enterLandeshauptstadt")!.style.visibility = 'hidden';
    document.getElementById("result")!.style.visibility = 'hidden';
    document.getElementById("answer")!.style.visibility = 'hidden';


  }
  ShowScore() {
    if (7 <= this.points) {
      this.number = 13
      const output = document.getElementById('output')
      output!.innerHTML = `Glückwunsch! Du hast das Quiz bestanden! <br>  Du hast ${this.points} von 13 Punkten erreicht!`;
      output!.style.color = "green"

      const src = document.getElementById("img") as HTMLImageElement;
      src!.src = this.av.thumbs[0]
      return
    }

    this.number = 14
    const output = document.getElementById('output')

    output!.innerHTML = `Schade! Du hast das Quiz leider nicht bestanden. <br>  Du hast ${this.points} von 13 Punkten erreicht!`;
    output!.style.color = "red"

    const src = document.getElementById("img") as HTMLImageElement;
    src!.src = this.av.thumbs[1]
  }

  CheckAnswerCapital() {
    let CorrectAnswer: string = this.av.FlagAndState[this.number].Capital;
    let SeletedAnswer: string = this.SelectedCapital
    let OutputQuestionState = this.av.FlagAndState[this.number].State;
    if (SeletedAnswer === CorrectAnswer) {
      if (this.number < 12) {
        this.IfAnswerIsTrue(OutputQuestionState, CorrectAnswer)
        return
      }
      if (this.number === 12)
        this.LastQuestionIfAnswerIsTrue(OutputQuestionState, CorrectAnswer)
      return
    }

    if (SeletedAnswer !== CorrectAnswer) {
      if (this.number < 12) {
        this.IfAnswerIsFalse(CorrectAnswer)
        return
      }
      if (this.number === 12) {
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
    let message: string = `Falsch, die richtige Antwort wäre ${CorrectAnswer}!`;
    const output = document.getElementById('output')
    output!.innerHTML = message
    output!.style.color = "red"

    const resultBt = document.getElementById("result");
    resultBt!.style.visibility = 'visible';

    const answerBt = document.getElementById("answer");
    answerBt!.style.visibility = 'hidden';
  }

  IfAnswerIsFalse(CorrectAnswer: string) {
    let message: string = `Falsch, die richtige Antwort wäre ${CorrectAnswer}!`;
    const output = document.getElementById('output')
    output!.innerHTML = message
    output!.style.color = "red"

    this.number++;

  }

  LastQuestionIfAnswerIsTrue(OutputState: string, CorrectAnswer: string) {
    let message: string = `Richtig!, die Landeshauptstadt von ${OutputState} ist ${CorrectAnswer}.`;

    const output = document.getElementById('output')
    output!.innerHTML = message
    output!.style.color = "green"

    this.points++

    const resultBt = document.getElementById("result");
    resultBt!.style.visibility = 'visible';

  }
  IfAnswerIsTrue(OutputState: string, CorrectAnswer: string) {
    let message: string = `Richtig!, die Landeshauptstadt von ${OutputState} ist ${CorrectAnswer}.`;
    const output = document.getElementById('output')
    output!.innerHTML = message
    output!.style.color = "green"

    this.points++
    this.number++
  }
  shuffle() {
    this.CapitalStates = this.av.Capitals.sort(() => Math.random() - 0.5);
    console.log(this.CapitalStates)
    this.Flag = this.av.FlagAndState.sort(() => Math.random() - 0.5);
    console.log(this.Flag)

  }
}


