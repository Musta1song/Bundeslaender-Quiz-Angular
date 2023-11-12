import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandeshauptstadtComponent } from './landeshauptstadt/landeshauptstadt.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { WappenComponent } from './wappen/wappen.component';

@NgModule({
  declarations: [
    AppComponent,
    LandeshauptstadtComponent,
    StartComponent,
    HeaderComponent,
    WappenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
