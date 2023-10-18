import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wappen',
  templateUrl: './wappen.component.html',
  styleUrls: ['./wappen.component.scss']
})
export class WappenComponent {

  randomNumber = Math.floor(Math.random() * 16);
  Bundeslaender = ["Baden-Würrtemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommer", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen-Anhalt", "Sachsen", "Schleswig-Holstein",
    "Thüringen"]
  Wappen = ["assets/Baden-Württemberg.png", "assets/Bayern.png", "assets/Berlin.png", "assets/Brandenburg.png", "assets/Bremen.png", "assets/Hamburg.png", "assets/Hessen.png", "assets/Mecklenburg.png", "assets/Niedersachsen.png", "assets/Nrw.png", "assets/Rheinland.png", "assets/Saarland.png", "assets/Sachsen-anhalt.png", "assets/Sachsen.png", "assets/Schleswig.png", "assets/Thueringen.png"]


  CheckAnswer() {
    let correctanswer: string = this.Bundeslaender[this.randomNumber];
    let answer: string = ((<HTMLInputElement>document.getElementById("enterBundesland")).value);
    let a = this.Wappen[this.randomNumber];
    let b = this.Bundeslaender[this.randomNumber];

    if (answer === correctanswer && answer != null) {
      let outpu: string = "Korrekt!, das Wappen gehört zu " + b + ".";
      document.getElementById('output')!.innerHTML = outpu;
    }
    else if (answer != correctanswer && answer != null) {
      let outpu: string = "Falsch, die richtige Antwort wäre " + b + "!";
      document.getElementById('output')!.innerHTML = outpu;
    }
  }


  weiterButton() {
    window.location.replace("./WappenQuiz");
  }


}
