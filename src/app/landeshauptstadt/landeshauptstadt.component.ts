import { Component } from '@angular/core';

@Component({
  selector: 'app-landeshauptstadt',
  templateUrl: './landeshauptstadt.component.html',
  styleUrls: ['./landeshauptstadt.component.scss']
})
export class LandeshauptstadtComponent {

  randomNumber = Math.floor(Math.random() * 13);

  Wappen = ["assets/Baden-Württemberg.png", "assets/Bayern.png", "assets/Berlin.png", "assets/Brandenburg.png", "assets/Bremen.png", "assets/Hamburg.png",
    "assets/Hessen.png", "assets/Mecklenburg.png", "assets/Niedersachsen.png", "assets/Nrw.png", "assets/Rheinland.png", "assets/Saarland.png", "assets/Sachsen-anhalt.png",
    "assets/Sachsen.png", "assets/Schleswig.png", "assets/Thueringen.png"]
  WappenohneStadtstaaten =["assets/Baden-Württemberg.png", "assets/Bayern.png",  "assets/Brandenburg.png",
  "assets/Hessen.png", "assets/Mecklenburg.png", "assets/Niedersachsen.png", "assets/Nrw.png", "assets/Rheinland.png", "assets/Saarland.png", "assets/Sachsen-anhalt.png",
  "assets/Sachsen.png", "assets/Schleswig.png", "assets/Thueringen.png"]

  ohneStadtstaaten = [" Baden-Würrtemberg", " Bayern", " Brandenburg",
    " Hessen", " Mecklenburg-Vorpommern", " Niedersachsen", " Nordrhein-Westfalen", " Rheinland-Pfalz", " Saarland", " Sachsen-Anhalt"
    , " Sachsen", " Schleswig-Holstein", " Thüringen"]

  Bundeslaender = [" Baden-Würrtemberg", " Bayern", " Berlin", " Brandenburg", " Bremen", " Hamburg",
    " Hessen", " Mecklenburg-Vorpommern", " Niedersachsen", " Nordrhein-Westfalen", " Rheinland-Pfalz", " Saarland", " Sachsen-Anhalt"
    , " Sachsen", " Schleswig-Holstein", " Thüringen"]

  Landeshauptstädte = ["Stuttgart", "München", "Potsdam", "Wiesbaden", "Rostock", "Hannover", "Düsseldorf", "Mainz", "Saarbrücken", "Magdeburg", "Dresden", "Kiel", "Erfurt"]

  a = "ohneStadtstaaten[randomNumber]";

  weiterButton(){
    window.location.replace("./LandeshauptstadtQuiz");
    
  }

  CheckAnswer() {
    let correctanswer: string = this.Landeshauptstädte[this.randomNumber];
    let answer: string = ((<HTMLInputElement>document.getElementById("enterLandeshauptstadt")).value);
    let a = this.ohneStadtstaaten[this.randomNumber];
    let b = this.Landeshauptstädte[this.randomNumber];


    if (answer === correctanswer && answer != null) {
      let outpu: string = "Korrekt!, die Landeshauptstadt von " + a + " ist " + b+".";
      document.getElementById('output')!.innerHTML = outpu;
    }
    else {
      let outpu: string = "Falsch, die richtige Antwort wäre " + b + "!";
      document.getElementById('output')!.innerHTML = outpu;

    }
  }

}
