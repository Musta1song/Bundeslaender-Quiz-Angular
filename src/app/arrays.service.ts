import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {
  /* Abschnitt: landeshauptstadt.component */
  WappenohneStadtstaaten = [
    "assets/Baden-Württemberg.png",
    "assets/Bayern.png",
    "assets/Brandenburg.png",
    "assets/Hessen.png",
    "assets/Mecklenburg.png",
    "assets/Niedersachsen.png",
    "assets/Nrw.png",
    "assets/Rheinland.png",
    "assets/Saarland.png",
    "assets/Sachsen-anhalt.png",
    "assets/Sachsen.png",
    "assets/Schleswig.png",
    "assets/Thueringen.png"
  ]

  ohneStadtstaaten = [
    "Baden-Würrtemberg",
    "Bayern",
    "Brandenburg",
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "Nordrhein-Westfalen",
    "Rheinland-Pfalz",
    "Saarland",
    "Sachsen-Anhalt",
    "Sachsen",
    "Schleswig-Holstein",
    "Thüringen"
  ]

  Landeshauptstädte = [
    "Stuttgart",
    "München",
    "Potsdam",
    "Wiesbaden",
    "Rostock",
    "Hannover",
    "Düsseldorf",
    "Mainz",
    "Saarbrücken",
    "Magdeburg",
    "Dresden",
    "Kiel",
    "Erfurt"
  ]

  randomNumberCapital = Math.floor(Math.random() * 13);

  weiterButtonCapital() {
    window.location.replace("./LandeshauptstadtQuiz");

  }

  CheckAnswerCapital() {
    let correctanswer: string = this.Landeshauptstädte[this.randomNumberCapital];
    let answer: string = ((<HTMLInputElement>document.getElementById("enterLandeshauptstadt")).value);
    let a = this.ohneStadtstaaten[this.randomNumberCapital];
    let b = this.Landeshauptstädte[this.randomNumberCapital];


    if (answer === correctanswer && answer != null) {
      let outpu: string = "Korrekt!, die Landeshauptstadt von " + a + " ist " + b + ".";
      document.getElementById('output')!.innerHTML = outpu;
    }
    else {
      let outpu: string = "Falsch, die richtige Antwort wäre " + b + "!";
      document.getElementById('output')!.innerHTML = outpu;

    }
  }
  /* Abschnitt: landeshauptstadt.component END */





  /* Abschnitt: wappen.component */

  Bundeslaender = [
    "Baden-Württemberg",
    "Bayern",
    "Berlin",
    "Brandenburg",
    "Bremen",
    "Hamburg",
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "Nordrhein-Westfalen",
    "Rheinland-Pfalz",
    "Saarland",
    "Sachsen-Anhalt",
    "Sachsen",
    "Schleswig-Holstein",
    "Thüringen"]

  Wappen = [
    "assets/Baden-Württemberg.png",
    "assets/Bayern.png",
    "assets/Berlin.png",
    "assets/Brandenburg.png",
    "assets/Bremen.png",
    "assets/Hamburg.png",
    "assets/Hessen.png",
    "assets/Mecklenburg.png",
    "assets/Niedersachsen.png",
    "assets/Nrw.png",
    "assets/Rheinland.png",
    "assets/Saarland.png",
    "assets/Sachsen-anhalt.png",
    "assets/Sachsen.png",
    "assets/Schleswig.png",
    "assets/Thueringen.png"]

  randomNumberWappen: number = Math.floor(Math.random() * 16);

  CheckAnswerWappen() {
    let correctanswer: string = this.Bundeslaender[this.randomNumberWappen];
    let answer: string = ((<HTMLInputElement>document.getElementById("enterBundesland")).value);
    let Bundesland = this.Bundeslaender[this.randomNumberWappen];

    if (answer === correctanswer && answer != null) {
      let Ausgabe: string = "Korrekt!, das Wappen gehört zu " + Bundesland + ".";
      document.getElementById('output')!.innerHTML = Ausgabe;
    }
    else if (answer != correctanswer && answer != "") {
      let Ausgabe: string = "Falsch, die richtige Antwort wäre " + Bundesland + "!";
      document.getElementById('output')!.innerHTML = Ausgabe;
    }
    else if (answer == "") {
      let Ausgabe: string = "";
      document.getElementById('output')!.innerHTML = Ausgabe;

    }
  }


  weiterButtonWappen() {
    window.location.replace("./WappenQuiz");
  }
  /* Abschnitt: wappen.component END */


  constructor() { }
}
