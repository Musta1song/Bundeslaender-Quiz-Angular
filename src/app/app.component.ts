import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mobile-app';
  Wappen = ["assets/Baden-Württemberg.png","assets/Bayern.png","assets/Berlin.png","assets/Brandenburg.png","assets/Bremen.png","assets/Hamburg.png",
  "assets/Hessen.png","assets/Mecklenburg.png","assets/Niedersachsen.png","assets/Nrw.png","assets/Rheinland.png","assets/Saarland.png","assets/Sachsen-anhalt.png",
  "assets/Sachsen.png","assets/Schleswig.png","assets/Thueringen.png"]
  Bundeslaender = ["Baden-Würrtemberg",
"Bayern",
"Berlin","Brandenburg","Bremen","Hamburg","Hessen","Mecklenburg-Vorpommer","Niedersachsen","Nordrhein-Westfalen","Rheinland-Pfalz","Saarland","Sachsen-Anhalt","Sachsen","Schleswig-Holstein",
"Thüringen"]
}
