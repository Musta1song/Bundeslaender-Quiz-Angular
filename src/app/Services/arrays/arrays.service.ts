import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {
  thumbs = [
    "assets/GreenUp.png",
    "assets/redDown.png"
  ]
  FlagAndState = [
    {
      Flag: "assets/Baden-Württemberg.png", State: "Baden-Würrtemberg", Capital: "Stuttgart"
    },
    {
      Flag: "assets/Bayern.png", State: "Bayern", Capital: "München"
    },
    {
      Flag: "assets/Brandenburg.png", State: "Brandenburg", Capital: "Potsdam"
    },
    {
      Flag: "assets/Hessen.png", State: "Hessen", Capital: "Wiesbaden"
    },
    {
      Flag: "assets/Mecklenburg.png", State: "Mecklenburg-Vorpommern", Capital: "Rostock"
    },
    {
      Flag: "assets/Niedersachsen.png", State: "Niedersachsen", Capital: "Hannover"
    },
    {
      Flag: "assets/Nrw.png", State: "Nordrhein-Westfalen", Capital: "Düsseldorf"
    },
    {
      Flag: "assets/Rheinland.png", State: "Rheinland-Pfalz", Capital: "Mainz"
    },
    {
      Flag: "assets/Saarland.png", State: "Saarland", Capital: "Saarbrücken"
    },
    {
      Flag: "assets/Sachsen-anhalt.png", State: "Sachsen-Anhalt", Capital: "Magdeburg"
    },
    {
      Flag: "assets/Sachsen.png", State: "Sachsen", Capital: "Dresden"
    },
    {
      Flag: "assets/Schleswig.png", State: "Schleswig-Holstein", Capital: "Kiel"
    },
    {
      Flag: "assets/Thueringen.png", State: "Thueringen", Capital: "Erfurt"
    },


  ]



  Capitals = [
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

  States = [
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

  Flag = [
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
