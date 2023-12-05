import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {
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
    "assets/Thueringen.png",
    "assets/gUp.png",
    "assets/redDown.png"
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
    "Thüringen",
    "",
    ""
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
    "assets/Thueringen.png"
  ]
 

  


  constructor() { }
}
