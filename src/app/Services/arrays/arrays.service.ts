import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {
  thumbs = [
    "assets/GreenUp.png",
    "assets/redDown.png"
  ]
  WappenAndState = [
    {
      Wappen: "assets/Baden-Württemberg.png", State: "Baden-Würrtemberg", Capital: "Stuttgart"
    },
    {
      Wappen: "assets/Bayern.png", State: "Bayern", Capital: "München"
    },
    {
      Wappen: "assets/Brandenburg.png", State: "Brandenburg", Capital: "Potsdam"
    },
    {
      Wappen: "assets/Hessen.png", State: "Hessen", Capital: "Wiesbaden"
    },
    {
      Wappen: "assets/Mecklenburg.png", State: "Mecklenburg-Vorpommern", Capital: "Rostock"
    },
    {
      Wappen: "assets/Niedersachsen.png", State: "Niedersachsen", Capital: "Hannover"
    },
    {
      Wappen: "assets/Nrw.png", State: "Nordrhein-Westfalen", Capital: "Düsseldorf"
    },
    {
      Wappen: "assets/Rheinland.png", State: "Rheinland-Pfalz", Capital: "Mainz"
    },
    {
      Wappen: "assets/Saarland.png", State: "Saarland", Capital: "Saarbrücken"
    },
    {
      Wappen: "assets/Sachsen-anhalt.png", State: "Sachsen-Anhalt", Capital: "Magdeburg"
    },
    {
      Wappen: "assets/Sachsen.png", State: "Sachsen", Capital: "Dresden"
    },
    {
      Wappen: "assets/Schleswig.png", State: "Schleswig-Holstein", Capital: "Kiel"
    },
    {
      Wappen: "assets/Thueringen.png", State: "Thueringen", Capital: "Erfurt"
    },
   

  ]



  Landeshauptstaedte = [
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
